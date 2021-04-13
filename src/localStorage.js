export const LS_setQuiz = (quizzesArr, answersArr) => {
    localStorage.setItem("quizzes", JSON.stringify(quizzesArr))
    localStorage.setItem("answers", JSON.stringify(answersArr))
}
export const LS_setQuizInfo = (quizTitle, quizId, numOfQuiz) => {
    localStorage.setItem("quizInfo", JSON.stringify({ quizTitle, quizId, numOfQuiz }))
}

export const LS_getQuizInfo = () => JSON.parse(localStorage.getItem("quizInfo"))
export const LS_getQuizzesArr = () => JSON.parse(localStorage.getItem("quizzes"))
export const LS_getAnswersArr = () => JSON.parse(localStorage.getItem("answers"))

// Save Quiz in QuizStorage with Local Storage
export const LS_setQuizData1 = (quizData) => { localStorage.setItem("QuizData1", JSON.stringify(quizData)) }
export const LS_setQuizData2 = (quizData) => { localStorage.setItem("QuizData2", JSON.stringify(quizData)) }

export const LS_getQuizData1 = () => JSON.parse(localStorage.getItem("QuizData1"))