module.exports = (subjectNames, payload, meanGrade) => {
    const courseTray = [];

    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Business Studies') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 7 &&
            payload['Business Studies'].points >= 7 &&
            payload.English.points >= 6
        ) {
            courseTray.push(
                'University of Nairobi',
                'Kabarak University',
                'Zetech University',
                'Maasai Mara University',
                'Kisii University',
                'Chuka University',
                'Africa Nazarene',
                'Technical University of Kenya',
                'KCA University'
            );
        }

        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 8 &&
            payload['Business Studies'].points >= 8 &&
            payload.English.points >= 6
        ) {
            courseTray.push(
                'Maasai Mara University',
                'Kisii University',
                'University of Nairobi',
                'Chuka University',
                'Kabarak University',
                'Zetech University',
                'Technical University of Kenya'
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
