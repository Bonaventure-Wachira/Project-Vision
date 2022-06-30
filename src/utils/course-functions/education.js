module.exports = (subjectNames, payload, meanGrade) => {
    const courseTray = [];
    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Physics') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 7 &&
            payload.Physics.points >= 7 &&
            payload.Chemistry.points >= 7 &&
            payload.English.points >= 7
        ) {
            courseTray.push(
                'Jaramogi Oginga Odinga University',
                'Tom Mboya University',
                'Kabarak University',
                'Machakos University',
                'University of Nairobi'
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
            payload.Mathematics.points >= 8 &&
            payload['Business Studies'].points >= 8 &&
            payload.English.points >= 6
        ) {
            courseTray.push(
                'Jaramogi Oginga Odinga University',
                'Tom Mboya University',
                'Kabarak University',
                'Machakos University',
                'University of Nairobi'
            );
        }
    }

    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 7 &&
            payload.English.points >= 7
        ) {
            courseTray.push(
                'Jaramogi Oginga Odinga University',
                'Tom Mboya University',
                'Kabarak University',
                'Machakos University',
                'University of Nairobi'
            );
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
