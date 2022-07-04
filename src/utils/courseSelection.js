module.exports = (payload) => {
    const scoresArr = Object.values(payload);
    const subjectNames = Object.keys(payload);
    const meanGrade =
        scoresArr.reduce((accum, subject) => {
            return accum + subject.points;
        }, 0) / scoresArr.length;

    const courses = []; //the array meant to hold names of courses
    const pushCourses = (...selectedCourses) => {
        selectedCourses.forEach((el) => {
            // testing for any occurence of the courses we are about to push
            if (courses.includes(el)) return;

            courses.push(el);
        });
    };
    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('English')
    ) {
        // First check under maths and english
        if (
            meanGrade >= 9 && //B+
            payload.Mathematics.points >= 9 && // B
            payload.English.points >= 7 // C+
        ) {
            pushCourses(
                'BACHELOR OF LAW',
                'BACHELOR OF EDUCATION SPECIAL NEEDS',
                'BACHELOR OF ARTS IN EDUCATION',
                'BACHELOR OF SCIENCE IN ACTURIAL SCIENCE',
                'BACHELOR OF ECONOMICS AND STATISTICS',
                'BACHELOR OF EDUCATION SPECIAL NEEDS',
                'BACHELOR OF ARTS IN CRIMINOLOGY AND SECURITY STUDIES',
                'BACHELOR OF SCIENCE IN INFORMATION AND COMMUNICATION TECHNOLOGY',
                ''
            );
        }
    }

    // English alone

    if (subjectNames.includes('English')) {
        if (meanGrade >= 7 && payload.English.points >= 9) {
            pushCourses(
                'BACHELOR OF LAW',
                'BACHELOR OF ECONOMICS AND STATISTICS',
                'BACHELOR OF SCIENCE IN INFORMATION AND COMMUNICATION TECHNOLOGY',
                'BACHELOR OF EDUCATION SPECIAL NEEDS'
            );
        }
    }

    // Maths phyc and English
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
            pushCourses(
                'BACHELOR OF SCIENCE IN COMPUTER SECURITY AND FORENSICS',
                'BACHELOR OF SCIENCE IN COMPUTER SCIENCE'
            );
        }
    }

    // Maths Biology Chem
    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Biology') &&
        subjectNames.includes('Chemistry')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 8 &&
            payload.Biology.points >= 5 &&
            payload.Chemistry.points >= 5
        ) {
            pushCourses(
                'BACHELOR OF SCIENCE IN MEDICAL LABORATORY SCIENCES',
                'BACHELOR OF EDUCATION SPECIAL NEEDS'
            );
        }
    }

    // Math bizna English
    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Business Studies') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 6 &&
            payload['Business Studies'].points >= 6 &&
            payload.English.points >= 6
        ) {
            pushCourses(
                'BACHELOR OF ARTS ECONOMICS AND SOCIOLOGY',
                'BACHELOR OF ECONOMICS AND STATISTICS',
                'BACHELOR OF BUSINESS ADMINISTRATION WITH IT',
                'BACHELOR OF EDUCATION',
                'BACHELOR OF COMMERCE',
                'BACHELOR OF BUSINESS INFORMATION SYSTEMS (BBIS)',
                'BACHELOR OF EDUCATION SPECIAL NEEDS'
            );
        }
    }

    // Phyc Math chem Bio
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
            pushCourses(
                'BACHELOR OF SCIENCE IN FOOD SCIENCE AND TECHNOLOGY',
                'BACHELOR OF SCIENCE IN RENEWABLE ENERGY, TECHNOLOGY AND MANAGEMENT',
                'BACHELOR OF SCIENCE IN COMPUTER SCIENCE',
                'BACHELOR OF CHEMICAL ENGINEERING',
                'BACHELOR OF SCIENCE BIOMEDICAL SCIENCE AND TECHNOLOGY',
                'BACHELOR OF SCIENCE IN WATER IRRIGATION AND ENVIRONMENTAL ENGINEERING',
                'BACHELOR OF SCIENCE (BIOCHEMISTRY)'
            );
        }
    }

    // Math Phyc chem english
    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Physics') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 6 &&
            payload.Physics.points >= 6 &&
            payload.Chemistry.points >= 6 &&
            payload.English.points >= 6
        ) {
            pushCourses(
                'BACHELOR OF CHEMICAL ENGINEERING',
                'BACHELOR OF SCIENCE IN RENEWABLE ENERGY, TECHNOLOGY AND MANAGEMENT',
                'BACHELOR OF SCIENCE(CONSTRUCTION MANAGEMENT)',
                'BACHELOR OF SCIENCE IN WATER IRRIGATION AND ENVIRONMENTAL ENGINEERING',
                'BACHELOR OF ECONOMICS AND STATISTICS',
                'BACHELOR OF ARTS IN EDUCATION',
                'BACHELOR OF SCIENCE IN INFORMATION AND COMMUNICATION TECHNOLOGY'
            );
        }
    }

    // Bio chem math Eng
    if (
        subjectNames.includes('Biology') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 8 &&
            payload.Biology.points >= 7 &&
            payload.Chemistry.points >= 7 &&
            payload.Mathematics.points >= 7 &&
            payload.English.points >= 7
        ) {
            pushCourses(
                'BACHELOR OF SCIENCE IN MEDICINE',
                'BACHELOR OF SCIENCE IN NURSING',
                'BACHELOR OF SCIENCE IN MEDICAL LABORATORY SCIENCES',
                'BACHELOR OF SCIENCE IN WATER IRRIGATION AND ENVIRONMENTAL ENGINEERING',
                'BACHELOR OF SCIENCE IN COMMUNITY DEVELOPMENT',
                'BACHELOR OF SCIENCE IN INFORMATION AND COMMUNICATION TECHNOLOGY'
            );
        }
    }

    // Bio chem agric Bizna Math
    if (
        subjectNames.includes('Biology') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Agriculture') &&
        subjectNames.includes('Business Studies') &&
        subjectNames.includes('Mathematics')
    ) {
        if (
            meanGrade >= 8 && //B-
            payload.Biology.points >= 9 && // B
            payload.Chemistry.points >= 8 && // B-
            payload.Agriculture.points >= 7 && // C+
            payload['Business Studies'].points >= 7 && // C+
            payload.Mathematics.points >= 7 //C+
        ) {
            pushCourses(
                'BACHELOR OF SCIENCE AGRICULTURAL ECONOMICS',
                'BACHELOR OF SCIENCE AGRIBUSINESS MANAGEMENT',
                'BACHELOR OF SCIENCE IN HORTICULTURE'
            );
        }
    }

    // Bio Chem Agric MAth Bizna
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
            payload.Mathematics.points >= 7 &&
            payload.Biology.points >= 7 &&
            payload.Agriculture.points >= 7 &&
            payload['Business Studies'].points >= 7 &&
            payload.Chemistry.points >= 7 &&
            payload.English.points >= 7
        ) {
            pushCourses(
                'BACHELOR OF SCIENCE AGRICULTURAL ECONOMICS',
                'BACHELOR OF SCIENCE AGRIBUSINESS MANAGEMENT',
                'BACHELOR OF SCIENCE IN HORTICULTURE',
                'BACHELOR OF SCIENCE (AGRICULTURAL EDUCATION AND EXTENSION)'
            );
        }
    }

    // Bio phyc chem math agric Eng
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
            payload.Chemistry.points >= 6 &&
            payload.Mathematics.points >= 6 &&
            payload.Agriculture.points >= 6 &&
            payload.English.points >= 6
        ) {
            pushCourses(
                'BACHELOR OF SCIENCE (AGRICULTURE)',
                'BACHELOR OF SCIENCE IN FOOD SCIENCE AND TECHNOLOGY',
                'BACHELOR OF SCIENCE IN COMMUNITY DEVELOPMENT',
                'BACHELOR OF SCIENCE AGRIBUSINESS MANAGEMENT'
            );
        }
    }

    // Math phyc eng Geo
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
            payload.Geography.points >= 6
        ) {
            pushCourses(
                'BACHELOR OF SCIENCE IN COMPUTER SCIENCE',
                'BACHELOR OF SCIENCE(CONSTRUCTION MANAGEMENT)',
                'BACHELOR OF ARTS IN EDUCATION'
            );
        }
    }

    // Bio chem geo math
    if (
        subjectNames.includes('Biology') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Geography') &&
        subjectNames.includes('Mathematics')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Biology.points >= 8 &&
            payload.Chemistry.points >= 8 &&
            payload.Geography.points >= 8 &&
            payload.Mathematics.points >= 7
        ) {
            pushCourses(
                'BACHELOR OF SCIENCE IN FOOD NUTRITION AND DIETETICS',
                'BACHELOR OF SCIENCE IN HORTICULTURE',
                'BACHELOR OF ECONOMICS AND STATISTICS'
            );
        }
    }

    // Bio phyc chem math geo
    if (
        subjectNames.includes('Biology') &&
        subjectNames.includes('Physics') &&
        subjectNames.includes('Chemistry') &&
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
            pushCourses('BACHELOR OF SCIENCE IN COMPUTER SCIENCE');
        }
    }

    // chem bio phyc geo math eng
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
            payload.Biology.points >= 7 &&
            payload.Chemistry.points >= 7 &&
            payload.Geography.points >= 7 &&
            payload.Mathematics.points >= 7
        ) {
            pushCourses(
                'BACHELOR OF SCIENCE INDUSTRIAL ENGINEERING',
                'BACHELOR OF SCIENCE IN WATER IRRIGATION AND ENVIRONMENTAL ENGINEERING',
                'BACHELOR OF SCIENCE'
            );
        }
    }
    return courses;
};
