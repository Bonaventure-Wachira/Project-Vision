module.exports = (subjectNames, payload, meanGrade) => {
    const courseTray = [];

    if (
        subjectNames.includes('Physics') &&
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Biology')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Physics.points >= 10 &&
            payload.Mathematics.points >= 10 &&
            payload.Chemistry.points >= 10 &&
            payload.Biology.points >= 10
        ) {
            courseTray.push('Egerton University', 'Kirinyaga University');
        }
    }

    if (
        subjectNames.includes('English') &&
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Biology')
    ) {
        if (
            meanGrade >= 7 &&
            payload.English.points >= 6 &&
            payload.Mathematics.points >= 6 &&
            payload.Chemistry.points >= 6 &&
            payload.Biology.points >= 6
        ) {
            courseTray.push('Kirinyaga University');
        }
    }

    if (
        subjectNames.includes('Physics') &&
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Physics.points >= 10 &&
            payload.Mathematics.points >= 10 &&
            payload.Chemistry.points >= 10 &&
            payload.English.points >= 10
        ) {
            courseTray.push('Kirinyaga University');
        }
    }

    if (
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Biology') &&
        subjectNames.includes('Physics') &&
        subjectNames.includes('Geography') &&
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Chemistry.points >= 7 &&
            payload.Biology.points >= 7 &&
            payload.Physics.points >= 7 &&
            payload.Geography.points >= 7 &&
            payload.Mathematics.points >= 7 &&
            payload.English.points >= 7
        ) {
            courseTray.push(
                'Kabarak University',
                'Jomo Kenyatta University of Agriculture and Technology'
            );
        }
    }

    const finalArr = [];
    courseTray.forEach((el) => {
        if (finalArr[el]) {
            return;
        }

        finalArr.push(el);
    });

    return finalArr;
};
