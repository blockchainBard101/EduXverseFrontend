import { Transaction } from "@mysten/sui/transactions";
import  PACKAGE_IDS  from "../addresses/smc_address.json";
// import "dotenv/config";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { fromBase64 } from "@mysten/sui/utils";
import { SuiClient, getFullnodeUrl } from "@mysten/sui/client";
import { bcs, fromHex, toHex } from "@mysten/bcs";
import { EduverseClient } from "./smc_interaction.ts";

interface CourseDetails {
    id : string;
    name: string;
    description: string;
    category : string,
    difficulty: number;
    xp: string;
    image: string;
    num_of_students: string;
    created_by: any;
    students: string[];
}

export class Courses {
    private keypair: Ed25519Keypair;
    private client: SuiClient;
    private eduverseClient: EduverseClient;
    private Address;

    constructor() {
        const privateKey = process.env.REACT_APP_PRIVATE_KEY;
        if (!privateKey) {
            throw new Error("PRIVATE_KEY environment variable is not set");
        }
        const keypair = Ed25519Keypair.fromSecretKey(fromBase64(privateKey).slice(1));
        const rpcUrl = getFullnodeUrl("devnet");
        this.keypair = keypair;
        this.client = new SuiClient({ url: rpcUrl });
        this.eduverseClient = new EduverseClient();
        this.Address = bcs.bytes(32).transform({
            input: (val: string) => fromHex(val),
            output: (val) => toHex(val),
        });
    }

    private parseCost(amount: string): number {
        return Math.abs(parseInt(amount, 10)) / 1_000_000_000;
    }

    private async signAndExecuteTransaction(transaction: Transaction) {
        try {
            const { objectChanges, balanceChanges } = await this.client.signAndExecuteTransaction({
                signer: this.keypair,
                transaction: transaction as unknown as Uint8Array,
                options: {
                    showBalanceChanges: true,
                    showEvents: true,
                    showInput: false,
                    showEffects: true,
                    showObjectChanges: true,
                    showRawInput: false,
                }
            });

            // console.log(objectChanges, balanceChanges);

            if (balanceChanges) {
                console.log("Cost to call the function:", this.parseCost(balanceChanges[0].amount), "SUI");
            }

            if (!objectChanges) {
                console.error("Error: RPC did not return objectChanges");
                return false; // Return false in case of an error
            }

            // If everything works fine, return true
            // console.log(objectChanges);
            return objectChanges;

        } catch (error) {
            console.error("Error executing transaction:", error);
            return false; // Return false in case of an exception
        }
    }

    /**
     * Inspects the given transaction using the Sui client's devInspectTransactionBlock function
     * @param {Transaction} transaction the transaction to inspect
     * @returns {Promise<(Uint8Array[][] | null)>} an array of return values of the transaction, or null if there was an error
     */
    private async devInspectTransactionBlock(transaction: Transaction): Promise<(any | null)> {
        try {
            const result = await this.client.devInspectTransactionBlock({
                transactionBlock: transaction as unknown as string, // Cast to string if necessary
                sender: this.keypair.getPublicKey().toSuiAddress(),
            });
            const returnValues = result.results ? result.results.map(result => result.returnValues) : [];
            return returnValues;
        } catch (error) {
            console.error("Error executing transaction:", error);
            return null; // Return false in case of an exception
        }
    }

    async createCourse(name: string, description: string, category: string, creatorAddress: string, xp: number, difficulty: number, image: string) {
        const transaction = new Transaction();
        transaction.moveCall({
            target: `${PACKAGE_IDS.COURSES_PACKAGE_ID}::courses::create_course`,
            arguments: [transaction.pure.string(name), transaction.pure.string(description), transaction.pure.string(category), transaction.pure.address(creatorAddress), transaction.pure.u64(xp), transaction.pure.u8(difficulty), transaction.pure.string(image)],
        });
        const object_changes = await this.signAndExecuteTransaction(transaction);
        if (object_changes) {
            const createdObject = object_changes.find(item => item.type === 'created');
            const objectId = createdObject ? createdObject.objectId : null;
            if (objectId) {
                await this.eduverseClient.addCourse(name, description, objectId);
                return objectId;
            } else {
                return null;
            }
        } else {
            return null;
        }

        // 
    }

    async addQuestion(course: string, question: string, answer: string) {
        const transaction = new Transaction();
        transaction.moveCall({
            target: `${PACKAGE_IDS.COURSES_PACKAGE_ID}::courses::add_question`,
            arguments: [transaction.object(course), transaction.pure.string(question), transaction.pure.string(answer)],
        })
        const object_changes = await this.signAndExecuteTransaction(transaction);
        if (object_changes) {
            return true;
        } else {
            return false;
        }
    }

    async enrollStudent(course: string, student: string) {
        const transaction = new Transaction();
        transaction.moveCall({
            target: `${PACKAGE_IDS.COURSES_PACKAGE_ID}::courses::enroll_student`,
            arguments: [transaction.object(course), transaction.pure.address(student)],
        })
        const object_changes = await this.signAndExecuteTransaction(transaction);
        if (object_changes) {
            await this.eduverseClient.enrollInCourse(course, student);
            return true;
        } else {
            return false;
        }
    }

    async unEnrollStudent(course: string, student: string) {
        const transaction = new Transaction();
        transaction.moveCall({
            target: `${PACKAGE_IDS.COURSES_PACKAGE_ID}::courses::unenroll_student`,
            arguments: [transaction.object(course), transaction.pure.address(student)],
        })
        const object_changes = await this.signAndExecuteTransaction(transaction);
        if (object_changes) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Removes a question from the given course
     * @param {string} course - ID of the course to remove the question from
     * @param {string} question - Text of the question to remove
     * @returns {Promise<boolean>} - Whether or not the question was successfully removed
     */
    async removeQuestion(course: string, question: string) {
        const transaction = new Transaction();
        transaction.moveCall({
            target: `${PACKAGE_IDS.COURSES_PACKAGE_ID}::courses::remove_question`,
            arguments: [transaction.object(course), transaction.pure.string(question)],
        })
        const object_changes = await this.signAndExecuteTransaction(transaction);
        if (object_changes) {
            return true;
        } else {
            return false;
        }
    }

    async updateCourseName(course: string, name: string) {
        const transaction = new Transaction();
        transaction.moveCall({
            target: `${PACKAGE_IDS.COURSES_PACKAGE_ID}::courses::update_course_name`,
            arguments: [transaction.object(course), transaction.pure.string(name)],
        })
        const object_changes = await this.signAndExecuteTransaction(transaction);
        if (object_changes) {
            return true;
        } else {
            return false;
        }
    }

    async updateCourseDescription(course: string, description: string) {
        const transaction = new Transaction();
        transaction.moveCall({
            target: `${PACKAGE_IDS.COURSES_PACKAGE_ID}::courses::update_course_description`,
            arguments: [transaction.object(course), transaction.pure.string(description)],
        })
        const object_changes = await this.signAndExecuteTransaction(transaction);
        if (object_changes) {
            return true;
        } else {
            return false;
        }
    }

    async updateCourseImageURL(course: string, image: string) {
        const transaction = new Transaction();
        transaction.moveCall({
            target: `${PACKAGE_IDS.COURSES_PACKAGE_ID}::courses::update_course_image_url`,
            arguments: [transaction.object(course), transaction.pure.string(image)],
        })
        const object_changes = await this.signAndExecuteTransaction(transaction);
        if (object_changes) {
            return true;
        } else {
            return false;
        }
    }

    async updateCourseDifficulty(course: string, difficulty: number) {
        const transaction = new Transaction();
        transaction.moveCall({
            target: `${PACKAGE_IDS.COURSES_PACKAGE_ID}::courses::update_course_difficulty_level`,
            arguments: [transaction.object(course), transaction.pure.u8(difficulty)],
        })
        const object_changes = await this.signAndExecuteTransaction(transaction);
        if (object_changes) {
            return true;
        } else {
            return false;
        }
    }

    async updateCourseXP(course: string, xp: number) {
        const transaction = new Transaction();
        transaction.moveCall({
            target: `${PACKAGE_IDS.COURSES_PACKAGE_ID}::courses::update_course_xp`,
            arguments: [transaction.object(course), transaction.pure.u64(xp)],
        })
        const object_changes = await this.signAndExecuteTransaction(transaction);
        if (object_changes) {
            return true;
        } else {
            return false;
        }
    }

    async addReview(course: string, student: string, rating: number, review: string) {
        const transaction = new Transaction();
        transaction.moveCall({
            target: `${PACKAGE_IDS.COURSES_PACKAGE_ID}::courses::add_review`,
            arguments: [transaction.object(course), transaction.pure.address(student), transaction.pure.u8(rating), transaction.pure.string(review)],
        })
        const object_changes = await this.signAndExecuteTransaction(transaction);
        if (object_changes) {
            return true;
        } else {
            return false;
        }
    }

    async checkCorrectAnswer(course: string, question: string, answer: string) {
        const transaction = new Transaction();
        transaction.moveCall({
            target: `${PACKAGE_IDS.COURSES_PACKAGE_ID}::courses::check_correct_answer`,
            arguments: [transaction.object(course), transaction.pure.string(question), transaction.pure.string(answer)],
        })
        const returnValues = await this.devInspectTransactionBlock(transaction);
        if (returnValues) {
            if (returnValues[0] !== undefined) {
                return bcs.bool().parse(Uint8Array.from(returnValues[0][0]));
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    async checkStudent(course: string,student_address: string) {
        const transaction = new Transaction();
        transaction.moveCall({
            target: `${PACKAGE_IDS.COURSES_PACKAGE_ID}::courses::check_student_enrolled`,
            arguments: [transaction.object(course), transaction.pure.address(student_address)],
        })
        const returnValues = await this.devInspectTransactionBlock(transaction);
        if (returnValues) {
            if (returnValues[0] !== undefined) {
                return bcs.bool().parse(Uint8Array.from(returnValues[0][0]));
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    private async getVectorAddress(vec) {
        const addresses = bcs.vector(this.Address).parse(Uint8Array.from(vec));
        return addresses.map(str => `0x${str}`);
    }

    async getCourseDetails(course: string) {
        const trx = new Transaction();
        trx.moveCall({
            target: `${PACKAGE_IDS.COURSES_PACKAGE_ID}::courses::view_course`,
            arguments: [trx.object(course)],
        });
        const returnValues = await this.devInspectTransactionBlock(trx);
        if (returnValues) {
            if (returnValues[0] !== undefined) {
                return {
                    id: course,
                    name: bcs.string().parse(Uint8Array.from(returnValues[0][0][0])),
                    description: bcs.string().parse(Uint8Array.from(returnValues[0][1][0])),
                    category: bcs.string().parse(Uint8Array.from(returnValues[0][2][0])),
                    difficulty: bcs.u8().parse(Uint8Array.from(returnValues[0][3][0])),
                    xp: bcs.u64().parse(Uint8Array.from(returnValues[0][4][0])),
                    image: bcs.string().parse(Uint8Array.from(returnValues[0][5][0])),
                    num_of_students: bcs.u64().parse(Uint8Array.from(returnValues[0][6][0])),
                    created_by: this.Address.parse(Uint8Array.from(returnValues[0][7][0])),
                    students: await this.getVectorAddress(returnValues[0][8][0]),
                };
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    async viewQuestions(course: string) {
        const trx = new Transaction();
        trx.moveCall({
            target: `${PACKAGE_IDS.COURSES_PACKAGE_ID}::courses::view_questions`,
            arguments: [trx.object(course)],
        });
        const returnValues = await this.devInspectTransactionBlock(trx);
        if (returnValues) {
            if (returnValues[0] !== undefined) {
                // console.log(returnValues[0])
                const Question = bcs.struct('Question', {
                    text: bcs.string(),
                    correct_answer: bcs.string(),
                });

                const questions_answers = bcs.vector(Question).parse(Uint8Array.from(returnValues[0][0][0]));
                return questions_answers;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    async viewReviews(course: string) {
        const trx = new Transaction();
        trx.moveCall({
            target: `${PACKAGE_IDS.COURSES_PACKAGE_ID}::courses::view_reviews`,
            arguments: [trx.object(course)],
        });
        const returnValues = await this.devInspectTransactionBlock(trx);
        if (returnValues) {
            if (returnValues[0] !== undefined) {
                const Review = bcs.struct('Review', {
                    student: this.Address,
                    rating: bcs.u8(),
                    review: bcs.string(),
                });
                let reviews = bcs.vector(Review).parse(Uint8Array.from(returnValues[0][0][0]));
                reviews = reviews.map(studentObj => ({
                    ...studentObj,
                    student: `0x${studentObj.student}`
                }));
                return reviews;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    async getAllCoursesDetails() {
        const course_addresses = await this.eduverseClient.getAllCoursesAddress();
        // console.log(course_addresses);
        if (course_addresses) {
            let courses: CourseDetails[] = [];
            for(let i = 0; i < course_addresses.length; i++) {
                const course_details = await this.getCourseDetails(course_addresses[i]);
                if (course_details) {
                    courses.push(course_details);
                }
            }
            return courses;
        } else {
            return null;
        }
        
    }
}

// console.log("Running courses_smc_interaction.ts");
// const block_chain_fundamentals = "0xf010c72103e005f25705e7ef85c14ef1d31e291ffe89fffa1c168f34fb615873";
// const courses = new Courses();
// console.log(await courses.createCourse('Blockchain fundamentals', "Learn the basics of blockchain technology", "Blockchain", '0x48dfdd7c1acb1b4919e1b4248206af584bef882f126f1733521ac41eb13fb77b', 100, 1, "https://dev.to/envoy_/blockchain-basics-2j2d"));
// console.log(await courses.getCourseDetails('0x6df94542b5aa9950f4ecf04c9d892c84e5087d99fcb7773d16754394a6c01477'));
// console.log(await courses.addQuestion(c, "What is fastest blockchain", "SUI"));
// console.log(await courses.addQuestion('0xae08841b676645903bd09c63014afc8b8611dbfc2ddd76aba8692c33b03d4cd8', "What is best blockchain", "SUI"));
// console.log(await courses.viewQuestions('0xae08841b676645903bd09c63014afc8b8611dbfc2ddd76aba8692c33b03d4cd8'));
// console.log(await courses.addReview('0x6df94542b5aa9950f4ecf04c9d892c84e5087d99fcb7773d16754394a6c01477', "0x48dfdd7c1acb1b4919e1b4248206af584bef882f126f1733521ac41eb13fb77b", 5, "Good"));
// console.log(await courses.viewReviews('0x6df94542b5aa9950f4ecf04c9d892c84e5087d99fcb7773d16754394a6c01477'));
// console.log(await courses.getAllCoursesDetails());
// console.log(await courses.updateCourseImageURL(c, "https://metaschool.so/_next/static/media/sui-cover.07109197.svg"));
