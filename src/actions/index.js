import { FETCH_COURSES } from './types';

function fetchCourses() {
    return {
        action: FETCH_COURSES,
        payload: [
            {
                title: "Problem Solving",
                description: "In this course you'll learn nothing"
            },
            {
                title: "HTML/CSS Bootcamp",
                description: "Learn HTML5 and CSS3"
            },
            {
                title: "UX for Developers",
                description: "User Experience course akdjkajfakjfkja"
            }
        ]
    }
}