const acturialScience = require('./course-functions/acturialScience');
const agribusiness = require('./course-functions/agribusiness');
const agriculturalExtension = require('./course-functions/agriculturalExtension');
const Agriculture = require('./course-functions/Agriculture');
const AgriEconomics = require('./course-functions/AgriEconomics');
const biochem = require('./course-functions/biochem');
const biologicalSciences = require('./course-functions/biologicalSciences');
const biomedSciences = require('./course-functions/biomedSciences');
const bizAdminWithIt = require('./course-functions/bizAdminWithIt');
const bizInformationSystems = require('./course-functions/bizInformationSystems');
const chemicalEngineering = require('./course-functions/chemicalEngineering');
const comHealthDev = require('./course-functions/comHealthDev');
const communityDev = require('./course-functions/communityDev');
const compSecurityForensics = require('./course-functions/compSecurityForensics');
const computerscience = require('./course-functions/computerscience');
const conMan = require('./course-functions/conMan');
const criminology = require('./course-functions/criminology');
const economicsSociology = require('./course-functions/economicsSociology');
const econStats = require('./course-functions/econStats');
const education = require('./course-functions/education');
const educationSpecialNeeds = require('./course-functions/educationSpecialNeeds');
const foodScience = require('./course-functions/foodScience');
const horticulture = require('./course-functions/horticulture');
const industrialEngineering = require('./course-functions/industrialEngineering');
const informationtechnology = require('./course-functions/informationtechnology');
const law = require('./course-functions/law');
const medicine = require('./course-functions/medicine');
const medLabSciences = require('./course-functions/medLabSciences');
const nursing = require('./course-functions/nursing');
const renewableEnergy = require('./course-functions/renewableEnergy');
const scienceGeneral = require('./course-functions/scienceGeneral');
const waterIrrEnvEngineering = require('./course-functions/waterIrrEnvEngineering');
// const courseSelection = require('./courseSelection');

module.exports = (courseArr, payload) => {
    const scoresArr = Object.values(payload);
    const subjectNames = Object.keys(payload);
    const meanGrade =
        scoresArr.reduce((accum, subject) => {
            return accum + subject.points;
        }, 0) / scoresArr.length;

    const finalCourseArr = [];
    for (let i = 0; i < courseArr.length; i++) {
        if (
            courseArr[i].name === 'BACHELOR OF SCIENCE(CONSTRUCTION MANAGEMENT)'
        ) {
            courseArr[i].universities = conMan(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }
        // BACHELOR OF SCIENCE AGRICULTURAL ECONOMICS
        if (
            courseArr[i].name === 'BACHELOR OF SCIENCE AGRICULTURAL ECONOMICS'
        ) {
            courseArr[i].universities = AgriEconomics(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        //BACHELOR OF SCIENCE AGRIBUSINESS MANAGEMENT
        if (
            courseArr[i].name === 'BACHELOR OF SCIENCE AGRIBUSINESS MANAGEMENT'
        ) {
            courseArr[i].universities = agribusiness(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE (AGRICULTURE)
        if (courseArr[i].name === 'BACHELOR OF SCIENCE (AGRICULTURE)') {
            courseArr[i].universities = Agriculture(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE (AGRICULTURAL EDUCATION AND EXTENSION)
        if (
            courseArr[i].name ===
            'BACHELOR OF SCIENCE (AGRICULTURAL EDUCATION AND EXTENSION)'
        ) {
            courseArr[i].universities = agriculturalExtension(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE
        if (courseArr[i].name === 'BACHELOR OF SCIENCE') {
            courseArr[i].universities = scienceGeneral(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE (BIOCHEMISTRY)
        if (courseArr[i].name === 'BACHELOR OF SCIENCE (BIOCHEMISTRY)') {
            courseArr[i].universities = biochem(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE(BIOLOGICAL SCIENCES)
        if (courseArr[i].name === 'BACHELOR OF SCIENCE(BIOLOGICAL SCIENCES)') {
            courseArr[i].universities = biologicalSciences(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE BIOMEDICAL SCIENCE AND TECHNOLOGY
        if (
            courseArr[i].name ===
            'BACHELOR OF SCIENCE BIOMEDICAL SCIENCE AND TECHNOLOGY'
        ) {
            courseArr[i].universities = biomedSciences(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF BUSINESS ADMINISTRATION WITH IT
        if (
            courseArr[i].name === 'BACHELOR OF BUSINESS ADMINISTRATION WITH IT'
        ) {
            courseArr[i].universities = bizAdminWithIt(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF CHEMICAL ENGINEERING
        if (courseArr[i].name === 'BACHELOR OF CHEMICAL ENGINEERING') {
            courseArr[i].universities = chemicalEngineering(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE IN COMMUNITY HEALTH and DEVELOPMENT
        if (
            courseArr[i].name ===
            'BACHELOR OF SCIENCE IN COMMUNITY HEALTH and DEVELOPMENT'
        ) {
            courseArr[i].universities = comHealthDev(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE IN COMMUNITY DEVELOPMENT
        if (
            courseArr[i].name === 'BACHELOR OF SCIENCE IN COMMUNITY DEVELOPMENT'
        ) {
            courseArr[i].universities = communityDev(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF BUSINESS INFORMATION SYSTEMS (BBIS)
        if (
            courseArr[i].name ===
            'BACHELOR OF BUSINESS INFORMATION SYSTEMS (BBIS)'
        ) {
            courseArr[i].universities = bizInformationSystems(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE IN COMPUTER SCIENCE
        if (courseArr[i].name === 'BACHELOR OF SCIENCE IN COMPUTER SCIENCE') {
            courseArr[i].universities = computerscience(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE IN COMPUTER SECURITY AND FORENSICS
        if (
            courseArr[i].name ===
            'BACHELOR OF SCIENCE IN COMPUTER SECURITY AND FORENSICS'
        ) {
            courseArr[i].universities = compSecurityForensics(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF ARTS IN CRIMINOLOGY AND SECURITY STUDIES
        if (
            courseArr[i].name ===
            'BACHELOR OF ARTS IN CRIMINOLOGY AND SECURITY STUDIES'
        ) {
            courseArr[i].universities = criminology(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF ARTS IN DEVELOPMENTAL AND POLICY STUDIES
        if (
            courseArr[i].name ===
            'BACHELOR OF ARTS IN DEVELOPMENTAL AND POLICY STUDIES'
        ) {
            //
        }

        // BACHELOR OF ARTS ECONOMICS AND SOCIOLOGY
        if (courseArr[i].name === 'BACHELOR OF ARTS ECONOMICS AND SOCIOLOGY') {
            courseArr[i].universities = economicsSociology(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF ECONOMICS AND STATISTICS
        if (courseArr[i].name === 'BACHELOR OF ECONOMICS AND STATISTICS') {
            courseArr[i].universities = econStats(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF ARTS IN EDUCATION
        if (courseArr[i].name === 'BACHELOR OF ARTS IN EDUCATION') {
            courseArr[i].universities = education(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE IN FOOD SCIENCE AND TECHNOLOGY
        if (
            courseArr[i].name ===
            'BACHELOR OF SCIENCE IN FOOD SCIENCE AND TECHNOLOGY'
        ) {
            courseArr[i].universities = foodScience(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE IN FOOD NUTRITION AND DIETETICS
        if (
            courseArr[i].name ===
            'BACHELOR OF SCIENCE IN FOOD NUTRITION AND DIETETICS'
        ) {
            //
        }

        // BACHELOR OF SCIENCE IN HORTICULTURE
        if (courseArr[i].name === 'BACHELOR OF SCIENCE IN HORTICULTURE') {
            courseArr[i].universities = horticulture(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE INDUSTRIAL ENGINEERING
        if (
            courseArr[i].name === 'BACHELOR OF SCIENCE INDUSTRIAL ENGINEERING'
        ) {
            courseArr[i].universities = industrialEngineering(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE IN INFORMATION AND COMMUNICATION TECHNOLOGY
        if (
            courseArr[i].name ===
            'BACHELOR OF SCIENCE IN INFORMATION AND COMMUNICATION TECHNOLOGY'
        ) {
            courseArr[i].universities = informationtechnology(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF LAW
        if (courseArr[i].name === 'BACHELOR OF LAW') {
            courseArr[i].universities = law(subjectNames, payload, meanGrade);
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE IN MEDICAL LABORATORY SCIENCES
        if (
            courseArr[i].name ===
            'BACHELOR OF SCIENCE IN MEDICAL LABORATORY SCIENCES'
        ) {
            courseArr[i].universities = medLabSciences(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE IN MEDICINE
        if (courseArr[i].name === 'BACHELOR OF SCIENCE IN MEDICINE') {
            courseArr[i].universities = medicine(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE IN NURSING
        if (courseArr[i].name === 'BACHELOR OF SCIENCE IN NURSING') {
            courseArr[i].universities = nursing(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE IN RENEWABLE ENERGY, TECHNOLOGY AND MANAGEMENT
        if (
            courseArr[i].name ===
            'BACHELOR OF SCIENCE IN RENEWABLE ENERGY, TECHNOLOGY AND MANAGEMENT'
        ) {
            courseArr[i].universities = renewableEnergy(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF EDUCATION SPECIAL NEEDS
        if (courseArr[i].name === 'BACHELOR OF EDUCATION SPECIAL NEEDS') {
            courseArr[i].universities = educationSpecialNeeds(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE IN WATER AND ENVIRONMENTAL ENGINEERING
        if (
            courseArr[i].name ===
            'BACHELOR OF SCIENCE IN WATER IRRIGATION AND ENVIRONMENTAL ENGINEERING'
        ) {
            courseArr[i].universities = waterIrrEnvEngineering(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF SCIENCE IN ACTURIAL SCIENCE
        if (courseArr[i].name === 'BACHELOR OF SCIENCE IN ACTURIAL SCIENCE') {
            courseArr[i].universities = acturialScience(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }

        // BACHELOR OF COMMERCE
        if (courseArr[i].name === 'BACHELOR OF COMMERCE') {
            courseArr[i].universities = acturialScience(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(courseArr[i]);
        }
    }

    return finalCourseArr;
};
