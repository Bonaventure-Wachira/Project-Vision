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
            payload.Biology.points >= 9 &&
            payload.Chemistry.points >= 8 &&
            payload.Agriculture.points >= 7 &&
            payload['Business Studies'].points >= 7 &&
            payload.Mathematics.points >= 7
        ) {
            courseTray.push(
                'Egerton University',
                'University of Nairobi',
                'Jomo Kenyatta University of Agriculture and Technology',
                'Meru University',
                'Chuka University'
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
                'University of Kabianga',
                'Meru University',
                'Jomo Kenyatta University of Agriculture and Technology',
                'University of Nairobi',
                'South Eastern Kenya University'
            );
        }
    }

    if (
        subjectNames.includes('Biology') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Geography') &&
        subjectNames.includes('Mathematics')
    ) {
        if (
            meanGrade >= 8 &&
            payload.Biology.points >= 8 &&
            payload.Chemistry.points >= 8 &&
            payload.Geography.points >= 8 &&
            payload.Mathematics.points >= 7
        ) {
            courseTray.push('Egerton University');
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
