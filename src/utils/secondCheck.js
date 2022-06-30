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
            el.universities = conMan(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }
        // BACHELOR OF SCIENCE AGRICULTURAL ECONOMICS
        if (el.name === 'BACHELOR OF SCIENCE AGRICULTURAL ECONOMICS') {
            el.universities = AgriEconomics(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        //BACHELOR OF SCIENCE AGRIBUSINESS MANAGEMENT
        if (el.name === 'BACHELOR OF SCIENCE AGRIBUSINESS MANAGEMENT') {
            el.universities = agribusiness(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF SCIENCE (AGRICULTURE)
        if (el.name === 'BACHELOR OF SCIENCE (AGRICULTURE)') {
            el.universities = Agriculture(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF SCIENCE (AGRICULTURAL EDUCATION AND EXTENSION)
        if (
            el.name ===
            'BACHELOR OF SCIENCE (AGRICULTURAL EDUCATION AND EXTENSION)'
        ) {
            el.universities = agriculturalExtension(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(el);
        }

        // BACHELOR OF SCIENCE
        if (el.name === 'BACHELOR OF SCIENCE') {
            el.universities = scienceGeneral(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF SCIENCE (BIOCHEMISTRY)
        if (el.name === 'BACHELOR OF SCIENCE (BIOCHEMISTRY)') {
            el.universities = biochem(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF SCIENCE(BIOLOGICAL SCIENCES)
        if (el.name === 'BACHELOR OF SCIENCE(BIOLOGICAL SCIENCES)') {
            el.universities = biologicalSciences(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(el);
        }

        // BACHELOR OF SCIENCE BIOMEDICAL SCIENCE AND TECHNOLOGY
        if (
            el.name === 'BACHELOR OF SCIENCE BIOMEDICAL SCIENCE AND TECHNOLOGY'
        ) {
            el.universities = biomedSciences(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF BUSINESS ADMINISTRATION WITH IT
        if (el.name === 'BACHELOR OF BUSINESS ADMINISTRATION WITH IT') {
            el.universities = bizAdminWithIt(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF CHEMICAL ENGINEERING
        if (el.name === 'BACHELOR OF CHEMICAL ENGINEERING') {
            el.universities = chemicalEngineering(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(el);
        }

        // BACHELOR OF SCIENCE IN COMMUNITY HEALTH and DEVELOPMENT
        if (
            el.name ===
            'BACHELOR OF SCIENCE IN COMMUNITY HEALTH and DEVELOPMENT'
        ) {
            el.universities = comHealthDev(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF SCIENCE IN COMMUNITY DEVELOPMENT
        if (el.name === 'BACHELOR OF SCIENCE IN COMMUNITY DEVELOPMENT') {
            el.universities = communityDev(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF BUSINESS INFORMATION SYSTEMS (BBIS)
        if (el.name === 'BACHELOR OF BUSINESS INFORMATION SYSTEMS (BBIS)') {
            el.universities = bizInformationSystems(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(el);
        }

        // BACHELOR OF SCIENCE IN COMPUTER SCIENCE
        if (el.name === 'BACHELOR OF SCIENCE IN COMPUTER SCIENCE') {
            el.universities = computerscience(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF SCIENCE IN COMPUTER SECURITY AND FORENSICS
        if (
            el.name === 'BACHELOR OF SCIENCE IN COMPUTER SECURITY AND FORENSICS'
        ) {
            el.universities = compSecurityForensics(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(el);
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
            el.universities = education(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF SCIENCE IN FOOD SCIENCE AND TECHNOLOGY
        if (el.name === 'BACHELOR OF SCIENCE IN FOOD SCIENCE AND TECHNOLOGY') {
            el.universities = foodScience(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF SCIENCE IN FOOD NUTRITION AND DIETETICS
        if (el.name === 'BACHELOR OF SCIENCE IN FOOD NUTRITION AND DIETETICS') {
            //
        }

        // BACHELOR OF SCIENCE IN HORTICULTURE
        if (el.name === 'BACHELOR OF SCIENCE IN HORTICULTURE') {
            el.universities = horticulture(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF SCIENCE INDUSTRIAL ENGINEERING
        if (el.name === 'BACHELOR OF SCIENCE INDUSTRIAL ENGINEERING') {
            el.universities = industrialEngineering(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(el);
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
            finalCourseArr.push(el);
        }

        // BACHELOR OF LAW
        if (el.name === 'BACHELOR OF LAW') {
            el.universities = law(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF SCIENCE IN MEDICAL LABORATORY SCIENCES
        if (el.name === 'BACHELOR OF SCIENCE IN MEDICAL LABORATORY SCIENCES') {
            el.universities = medLabSciences(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF SCIENCE IN MEDICINE
        if (el.name === 'BACHELOR OF SCIENCE IN MEDICINE') {
            el.universities = medicine(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF SCIENCE IN NURSING
        if (el.name === 'BACHELOR OF SCIENCE IN NURSING') {
            el.universities = nursing(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF SCIENCE IN RENEWABLE ENERGY, TECHNOLOGY AND MANAGEMENT
        if (
            el.name ===
            'BACHELOR OF SCIENCE IN RENEWABLE ENERGY, TECHNOLOGY AND MANAGEMENT'
        ) {
            el.universities = renewableEnergy(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF EDUCATION SPECIAL NEEDS
        if (el.name === 'BACHELOR OF EDUCATION SPECIAL NEEDS') {
            el.universities = educationSpecialNeeds(
                subjectNames,
                payload,
                meanGrade
            );
            finalCourseArr.push(el);
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
            finalCourseArr.push(el);
        }

        // BACHELOR OF SCIENCE IN ACTURIAL SCIENCE
        if (el.name === 'BACHELOR OF SCIENCE IN ACTURIAL SCIENCE') {
            el.universities = acturialScience(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }

        // BACHELOR OF COMMERCE
        if (el.name === 'BACHELOR OF COMMERCE') {
            el.universities = acturialScience(subjectNames, payload, meanGrade);
            finalCourseArr.push(el);
        }
    });
    console.log(finalCourseArr);

    return finalCourseArr;
};
