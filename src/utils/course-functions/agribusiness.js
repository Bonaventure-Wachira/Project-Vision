module.exports = (subjectNames, payload, meanGrade) => {
    const courseTray = [];

    if (
        subjectNames.includes('Biology') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Agriculture') &&
        subjectNames.includes('Business Studies') &&
        subjectNames.includes('Mathematics')
    ) {
        if (
            meanGrade >= 8 &&
            payload.Biology.points >= 8 &&
            payload.Chemistry.points >= 8 &&
            payload.Agriculture.points >= 7 &&
            payload['Business Studies'].points >= 7 &&
            payload.Mathematics.points >= 7
        ) {
            courseTray.push(
                'Kenyatta University',
                'Maasai Mara University',
                'Rongo University',
                'Machakos University',
                'Jaramogi Oginga Odinga University',
                'Baraton College'
            );
        }
    }

    if (
        subjectNames.includes('Biology') &&
        subjectNames.includes('Physics') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Agriculture') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Biology.points >= 6 &&
            payload.Physics.points >= 6 &&
            payload.Chemistry.points >= 6 &&
            payload.Mathematics.points >= 6 &&
            payload.Agriculture.points >= 6 &&
            payload.English.points >= 6
        ) {
            courseTray.push(
                'Meru University',
                'Jaramogi Oginga Odinga Universsity',
                'Catholic University of Eastern Africa'
            );
        }
    }

    if (
        subjectNames.includes('Biology') &&
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Agriculture') &&
        subjectNames.includes('Business Studies') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Biology.points >= 7 &&
            payload.Mathematics.points >= 7 &&
            payload.Agriculture.points >= 7 &&
            payload['Business Studies'].points >= 7 &&
            payload.Chemistry.points >= 7 &&
            payload.English.points >= 7
        ) {
            courseTray.push(
                'Kenyatta University',
                'Jaramogi Oginga Odinga University',
                'Machakos University',
                'Maasai Mara University',
                'Rongo University'
            );
        }
    }

    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Business Studies') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 7 &&
            payload['Business Studies'].points >= 7 &&
            payload.English.points >= 7
        ) {
            courseTray.push('Catholic University of Eastern Africa');
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
