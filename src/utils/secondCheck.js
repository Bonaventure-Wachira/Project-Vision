function secondCheckcourseSelection(courseArr, payload) {
    const scoresArr = Object.values(payload);
    const subjectNames = Object.keys(payload);
    const meanGrade =
        scoresArr.reduce((accum, subject) => {
            return accum + subject.points;
        }, 0) / scoresArr.length;

    const finalCourseArr = [];
    courseArr.forEach((el) => {
        // if()
    });
}
