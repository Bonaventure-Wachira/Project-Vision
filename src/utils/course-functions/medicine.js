module.exports = (subjectNames, payload, meanGrade) => {
    const courseTray = [];

    if (
        subjectNames.includes('Biology') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 10 &&
            payload.Biology.points >= 10 &&
            payload.Chemistry.points >= 10 &&
            payload.Mathematics.points >= 10 &&
            payload.English.points >= 9
        ) {
            courseTray.push('Maseno University');
        }
    }

    if (
        subjectNames.includes('Biology') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 10 &&
            payload.Biology.points >= 7 &&
            payload.Chemistry.points >= 7 &&
            payload.Mathematics.points >= 7 &&
            payload.English.points >= 7
        ) {
            courseTray.push(
                'Uzima University College',
                'University of Nairobi'
            );
        }
    }

    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Biology') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 8 &&
            payload.Mathematics.points >= 8 &&
            payload.Biology.points >= 8 &&
            payload.Chemistry.points >= 8 &&
            payload.English.points >= 8
        ) {
            courseTray.push('University of Nairobi', 'Egerton University');
        }
    }

    if (
        subjectNames.includes('Biology') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Biology.points >= 9 &&
            payload.Chemistry.points >= 9 &&
            payload.Mathematics.points >= 9 &&
            payload.English.points >= 9
        ) {
            courseTray.push(
                'Mount Kenya University',
                'University of Nairobi',
                'Kenya Methodist University',
                'Kenyatta University',
                'Jomo Kenyatta University of Agriculture and Technology'
            );
        }
    }

    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('English') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Biology')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 7 &&
            payload.English.points >= 7 &&
            payload.Chemistry.points >= 7 &&
            payload.Biology.points >= 7
        ) {
            courseTray.push('University of Nairobi');
        }
    }

    function getUnique(array) {
        var uniqueArray = [];

        // Loop through array values
        for (i = 0; i < array.length; i++) {
            if (uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }
    return getUnique(courseTray);
};
