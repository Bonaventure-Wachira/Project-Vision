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
            payload.Biology.points >= 7 &&
            payload.Chemistry.points >= 7 &&
            payload.Mathematics.points >= 7 &&
            payload.English.points >= 7
        ) {
            courseTray.push(
                'Jomo Kenyatta University of Agriculture and Technology',
                'University of Nairobi',
                'Mount Kenya University',
                'Kabarak University',
                'Egerton University',
                'Daystar University',
                'Dedan Kimathi University of Technology',
                'Amref International University'
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
            courseTray.push(
                'Jomo Kenyatta University of Agriculture and Technology',
                'University of Nairobi',
                'Mount Kenya University',
                'Kabarak University',
                'Egerton University',
                'Daystar University',
                'Dedan Kimathi University of Technology',
                'Amref International University'
            );
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
                'Narok University College',
                'Tharaka University',
                'University of Nairobi',
                'Kabarak University',
                'Kenyatta University',
                'Jomo Kenyatta University of Agriculture and Technology',
                'Amref International University',
                'Dedan Kimathi University'
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
            courseTray.push(
                'Narok University College',
                'Tharaka University',
                'University of Nairobi',
                'Kabarak University',
                'Kenya Methodist University',
                'Jomo Kenyatta University of Agriculture and Technology',
                'Amref International University',
                'Dedan Kimathi University'
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
