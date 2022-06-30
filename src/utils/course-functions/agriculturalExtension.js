module.exports = (subjectNames, payload, meanGrade) => {
    const courseTray = [];

    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Biology') &&
        subjectNames.includes('Agriculture') &&
        subjectNames.includes('Business Studies') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Biology.points >= 7 &&
            payload.Physics.points >= 7 &&
            payload.Chemistry.points >= 7 &&
            payload.Mathematics.points >= 7 &&
            payload.Agriculture.points >= 7 &&
            payload.English.points >= 7
        ) {
            courseTray.push(
                'Tharaka University',
                'Laikipia University',
                'Rongo University',
                'University of Kabianga',
                'Taita Taveta University'
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
