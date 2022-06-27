const acturialScience = require('./course-functions/acturialScience');
const bizAdminWithIt = require('./course-functions/bizAdminWithIt');
const bizInformationSystems = require('./course-functions/bizInformationSystems');
const criminology = require('./course-functions/criminology');
const economicsSociology = require('./course-functions/economicsSociology');
const econStats = require('./course-functions/econStats');
const educationSpecialNeeds = require('./course-functions/educationSpecialNeeds');
const informationtechnology = require('./course-functions/informationtechnology');
const law = require('./course-functions/law');
const waterIrrEnvEngineering = require('./course-functions/waterIrrEnvEngineering');

module.exports = (courseArr, payload) => {
    const scoresArr = Object.values(payload);
    const subjectNames = Object.keys(payload);
    const meanGrade =
        scoresArr.reduce((accum, subject) => {
            return accum + subject.points;
        }, 0) / scoresArr.length;

    const finalCourseArr = [];
    courseArr.forEach((el) => {
        // BACHELOR OF SCIENCE(CONSTRUCTION MANAGEMENT)
        if (el.name === 'BACHELOR OF SCIENCE(CONSTRUCTION MANAGEMENT)') {
            //
        }
        // BACHELOR OF SCIENCE AGRICULTURAL ECONOMICS
        if (el.name === 'BACHELOR OF SCIENCE AGRICULTURAL ECONOMICS') {
            //
        }

        //BACHELOR OF SCIENCE AGRIBUSINESS MANAGEMENT
        if (el.name === 'BACHELOR OF SCIENCE AGRIBUSINESS MANAGEMENT') {
            //
        }

        // BACHELOR OF SCIENCE (AGRICULTURE)
        if (el.name === 'BACHELOR OF SCIENCE (AGRICULTURE)') {
            //
        }

        // BACHELOR OF SCIENCE (AGRICULTURAL EDUCATION AND EXTENSION)
        if (
            el.name ===
            'BACHELOR OF SCIENCE (AGRICULTURAL EDUCATION AND EXTENSION)'
        ) {
            //
        }

        // BACHELOR OF SCIENCE
        if (el.name === 'BACHELOR OF SCIENCE') {
            //
        }

        // BACHELOR OF SCIENCE (BIOCHEMISTRY)
        if (el.name === 'BACHELOR OF SCIENCE (BIOCHEMISTRY)') {
            //
        }

        // BACHELOR OF SCIENCE(BIOLOGICAL SCIENCES)
        if (el.name === 'BACHELOR OF SCIENCE(BIOLOGICAL SCIENCES)') {
            //
        }

        // BACHELOR OF SCIENCE BIOMEDICAL SCIENCE AND TECHNOLOGY
        if (
            el.name === 'BACHELOR OF SCIENCE BIOMEDICAL SCIENCE AND TECHNOLOGY'
        ) {
            //
        }

        // BACHELOR OF BUSINESS ADMINISTRATION WITH IT
        if (el.name === 'BACHELOR OF BUSINESS ADMINISTRATION WITH IT') {
            el.universities = bizAdminWithIt(subjectNames, payload, meanGrade);
            courseArr.push(el);
        }

        // BACHELOR OF CHEMICAL ENGINEERING
        if (el.name === 'BACHELOR OF CHEMICAL ENGINEERING') {
            //
        }

        // BACHELOR OF SCIENCE IN COMMUNITY HEALTH and DEVELOPMENT
        if (
            el.name ===
            'BACHELOR OF SCIENCE IN COMMUNITY HEALTH and DEVELOPMENT'
        ) {
            //
        }

        // BACHELOR OF SCIENCE IN COMMUNITY DEVELOPMENT
        if (el.name === 'BACHELOR OF SCIENCE IN COMMUNITY DEVELOPMENT') {
            //
        }

        // BACHELOR OF BUSINESS INFORMATION SYSTEMS (BBIS)
        if (el.name === 'BACHELOR OF BUSINESS INFORMATION SYSTEMS (BBIS)') {
            el.universities = bizInformationSystems(
                subjectNames,
                payload,
                meanGrade
            );
            courseArr.push(el);
        }

        // BACHELOR OF SCIENCE IN COMPUTER SCIENCE
        if (el.name === 'BACHELOR OF SCIENCE IN COMPUTER SCIENCE') {
            //
        }

        // BACHELOR OF SCIENCE IN COMPUTER SECURITY AND FORENSICS
        if (
            el.name === 'BACHELOR OF SCIENCE IN COMPUTER SECURITY AND FORENSICS'
        ) {
            //
        }

        // BACHELOR OF ARTS IN CRIMINOLOGY AND SECURITY STUDIES
        if (
            el.name === 'BACHELOR OF ARTS IN CRIMINOLOGY AND SECURITY STUDIES'
        ) {
            el.universities = criminology(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF ARTS IN DEVELOPMENTAL AND POLICY STUDIES
        if (
            el.name === 'BACHELOR OF ARTS IN DEVELOPMENTAL AND POLICY STUDIES'
        ) {
            //
        }

        // BACHELOR OF ARTS ECONOMICS AND SOCIOLOGY
        if (el.name === 'BACHELOR OF ARTS ECONOMICS AND SOCIOLOGY') {
            el.universities = economicsSociology(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(el);
        }

        // BACHELOR OF ECONOMICS AND STATISTICS
        if (el.name === 'BACHELOR OF ECONOMICS AND STATISTICS') {
            el.universities = econStats(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF ARTS IN EDUCATION
        if (el.name === 'BACHELOR OF ARTS IN EDUCATION') {
            //
        }

        // BACHELOR OF SCIENCE IN FOOD SCIENCE AND TECHNOLOGY
        if (el.name === 'BACHELOR OF SCIENCE IN FOOD SCIENCE AND TECHNOLOGY') {
            //
        }

        // BACHELOR OF SCIENCE IN FOOD NUTRITION AND DIETETICS
        if (el.name === 'BACHELOR OF SCIENCE IN FOOD NUTRITION AND DIETETICS') {
            //
        }

        // BACHELOR OF SCIENCE IN HORTICULTURE
        if (el.name === 'BACHELOR OF SCIENCE IN HORTICULTURE') {
            //
        }

        // BACHELOR OF SCIENCE INDUSTRIAL ENGINEERING
        if (el.name === 'BACHELOR OF SCIENCE INDUSTRIAL ENGINEERING') {
            //
        }

        // BACHELOR OF SCIENCE IN INFORMATION AND COMMUNICATION TECHNOLOGY
        if (
            el.name ===
            'BACHELOR OF SCIENCE IN INFORMATION AND COMMUNICATION TECHNOLOGY'
        ) {
            el.universities = informationtechnology(
                subjectNames,
                payload,
                meanGrade
            );
            courseArr.push(el);
        }

        // BACHELOR OF LAW
        if (el.name === 'BACHELOR OF LAW') {
            el.universities = law(subjectNames, payload, meanGrade);
            courseArr.push(el);
        }

        // BACHELOR OF SCIENCE IN MEDICAL LABORATORY SCIENCES
        if (el.name === 'BACHELOR OF SCIENCE IN MEDICAL LABORATORY SCIENCES') {
            //
        }

        // BACHELOR OF SCIENCE IN MEDICINE
        if (el.name === 'BACHELOR OF SCIENCE IN MEDICINE') {
            //
        }

        // BACHELOR OF SCIENCE IN NURSING
        if (el.name === 'BACHELOR OF SCIENCE IN NURSING') {
            //
        }

        // BACHELOR OF SCIENCE IN RENEWABLE ENERGY, TECHNOLOGY AND MANAGEMENT
        if (
            el.name ===
            'BACHELOR OF SCIENCE IN RENEWABLE ENERGY, TECHNOLOGY AND MANAGEMENT'
        ) {
            //
        }

        // BACHELOR OF EDUCATION SPECIAL NEEDS
        if (el.name === 'BACHELOR OF EDUCATION SPECIAL NEEDS') {
            el.universities = educationSpecialNeeds(
                subjectNames,
                payload,
                meanGrade
            );
            courseArr.push(el);
        }

        // BACHELOR OF SCIENCE IN WATER AND ENVIRONMENTAL ENGINEERING
        if (
            el.name ===
            'BACHELOR OF SCIENCE IN WATER IRRIGATION AND ENVIRONMENTAL ENGINEERING'
        ) {
            el.universities = waterIrrEnvEngineering(
                subjectNames,
                payload,
                meanGrade
            );
            courseArr.push(el);
        }

        // BACHELOR OF SCIENCE IN ACTURIAL SCIENCE
        if (el.name === 'BACHELOR OF SCIENCE IN ACTURIAL SCIENCE') {
            el.universities = acturialScience(subjectNames, payload, meanGrade);
            courseArr.push(el);
        }

        // BACHELOR OF COMMERCE
        if (el.name === 'BACHELOR OF COMMERCE') {
            el.universities = acturialScience(subjectNames, payload, meanGrade);
            courseArr.push(el);
        }
    });

    return finalCourseArr;
};
