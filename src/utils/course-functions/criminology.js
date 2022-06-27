module.exports = (subjectNames, payload, meanGrade) => {
    const courseTray = [];

    if (
        subjectNames.includes('English') &&
        subjectNames.includes('Mathematics')
    ) {
        if (
            meanGrade >= 7 &&
            payload.English.points >= 7 &&
            payload.Mathetics.points >= 9
        ) {
            courseTray.push(
                'Dedan Kimathi University',
                'Africa Nazarene',
                'Maseno University',
                'Tharaka University',
                'University of Embu'
            );
        }
    }

    return courseTray;
};
