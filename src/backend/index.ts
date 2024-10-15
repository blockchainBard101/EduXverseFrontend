import { Courses } from './scripts/courses_smc_interaction.ts';
import { EduverseClient } from './scripts/smc_interaction.ts';

const courses = new Courses();
const edxClient = new EduverseClient();

export const addUser = async (name, address) => {
    const user_exists = await edxClient.getUserDetails(address);
    if (user_exists?.name) {
        // console.log('User already exists');
        return false;
    } else {
        // console.log('Adding user');
        const added = await edxClient.addUser(name, address);
        return added;
    }
}

export const userDetails = async (address) => {
    const userDetails = await edxClient.getUserDetails(address);
    if (userDetails) {
        return userDetails
    } else {
        return null;
    }
}

export const getAllCourses = async () => {
    const course_details = await courses.getAllCoursesDetails();
    if (course_details) {
        // console.log(course_details);
        return course_details;
    } else {
        return null;
    }
}

export const enrollCourse = async (course_address, student_address) => {
    const already_enrolled = await courses.checkStudent(course_address, student_address);
    if (already_enrolled) {
        return already_enrolled;
    }else {
        const enrolled = await courses.enrollStudent(course_address, student_address);
        if (enrolled) {
            return enrolled;
        } else {
            return false;
        }
    }
}

export const checkIfCourseCompleted = async (course_address, student_address) => {
    const completed = await edxClient.checkCourseCompleted(course_address, student_address);
    if (completed) {
        if (completed === true) {
            return true;
        } else {
            return false;
        }
    } else {
        return null;
    }
}

export const completeCourse = async (user_address, course_address) => {
    const completed = await edxClient.completeCourse(course_address, user_address);
    return completed;
}

export const getCourseXp = async (course_address) => {
    const course_details = await courses.getCourseDetails(course_address);
    if (course_details) {
        return course_details.xp;
    }
}

export const checkCorrectAnswer = async (course_address, question, answer) => {
    const correct = await courses.checkCorrectAnswer(course_address, question, answer);
    // console.log(correct);
    if (correct) {
        if (correct === true) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
