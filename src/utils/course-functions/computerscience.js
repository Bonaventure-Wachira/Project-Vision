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
            payload.Physics.points >= 7 &&
            payload.Mathematics.points >= 7 &&
            payload.Chemistry.points >= 7 &&
            payload.Biology.points >= 7
        ) {
            courseTray.push(
                'Jomo Kenyatta University of Agriculture and Technology',
                'Meru University',
                'Multimedia University',
                'Laikipia University',
                'Karatina University',
                'Tom Mboya University'
            );
        }
    }

    if (
        subjectNames.includes('Biology') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Physics') &&
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Geography')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Biology.points >= 8 &&
            payload.Chemistry.points >= 8 &&
            payload.Physics.points >= 9 &&
            payload.Mathematics.points >= 9 &&
            payload.Geography.points >= 8
        ) {
            courseTray.push('Garissa University');
        }
    }

    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Physics') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 6 &&
            payload.Physics.points >= 6 &&
            payload.English.points >= 6
        ) {
            courseTray.push('Kenyatta University');
        }
    }

    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Physics') &&
        subjectNames.includes('English') &&
        subjectNames.includes('Geography')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 6 &&
            payload.Physics.points >= 6 &&
            payload.English.points >= 6 &&
            payload.English.points >= 6
        ) {
            courseTray.push(
                'University of Nairobi',
                'Tharaka University',
                'Chuka University',
                'University of Embu'
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
