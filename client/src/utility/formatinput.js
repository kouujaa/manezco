const toquestion = (data = []) => {
  let questions = [];

  data.forEach((e) => {
    let temparr = [];
    let questionText = e.question;

    temparr = e.incorrect_answers.map((e) => {
      return { answerText: e, isCorrect: false, choosen: false };
    });
    let random = Math.floor(Math.random() * 4);
    temparr.splice(random, 0, {
      answerText: e.correct_answer,
      isCorrect: true,
      choosen: false,
    });
    const re = {
      questionText,
      answerOptions: temparr,
      anwered: false,
    };
    questions.push(re);
  });

  return questions;
};

export default toquestion;
