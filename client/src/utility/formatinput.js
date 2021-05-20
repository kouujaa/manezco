const toquestion = (data = []) => {
  let questions = [];

  data.forEach((e) => {
    let temparr = [];
    let questionText = atob(e.question);

    temparr = e.incorrect_answers.map((e) => {
      return { answerText: atob(e), isCorrect: false, choosen: false };
    });
    let random = Math.floor(Math.random() * 4);
    temparr.splice(random, 0, {
      answerText: atob(e.correct_answer),
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
