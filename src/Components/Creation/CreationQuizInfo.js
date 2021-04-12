import React, { useState } from 'react';
import { connect } from 'react-redux';
import { LS_getQuizInfo, LS_setQuizInfo } from '../../localStorage';

const CreationQuizInfo = ({ startCreateQuizzes }) => {
    const [quizTitle, setQuizTItle] = useState("")
    const [numOfQuiz, setNumOfQuiz] = useState(3)

    const onChangeValue = (e) => {
        let { target: { name, value } } = e
        if (name === "quizTitle") {
            setQuizTItle(value)
        } else if (name === "numOfQuiz") {
            value = parseInt(value)
            setNumOfQuiz(value)
        }
    }
    const createQuizId = () => {
        const quizId = Date.now()
        return quizId
    }

    return (
        <div className="quizInfo">
            <form className="quizInfo_form" onSubmit={(e) => {
                e.preventDefault()
                const quizId = createQuizId()
                LS_setQuizInfo(quizTitle, quizId, numOfQuiz)
                startCreateQuizzes()
            }
            }>
                <input
                    className="quizInfo_title"
                    type="text"
                    placeholder="만들고자 하는 퀴즈의 주제는 무엇인가요?"
                    value={quizTitle}
                    name="quizTitle"
                    onChange={onChangeValue}
                    required
                    autoComplete='off'
                />
                <div className="quizInfo_num">
                    <div className="quizInfo_num_msg">몇 개의 퀴즈를 만드나요? (1~50)</div>
                    <input
                        className="quizInfo_num_input"
                        type="number"
                        min={1} max={50}
                        value={numOfQuiz}
                        name="numOfQuiz"
                        onChange={onChangeValue}
                        required
                    />
                    <input
                        className="quizInfo_btn btn"
                        type="submit"
                        value="만들기"
                    />
                </div>
            </form>
        </div >
    );
}

export default connect()(CreationQuizInfo);