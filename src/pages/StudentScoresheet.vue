<template>
    <div>
        <h1>My scoresheet</h1>

        <div v-if="exams.length == 0">
            <base-card>
                <h2>You do not have any exam results here just yet.</h2>
                <h4>Would you like to get started?</h4>
            </base-card>
        </div>
        <div v-else>
            <results-table>
                <ul>
                    <li v-for="(test, index) in exam" :key="index">
                        {{ test }}
                    </li>
                </ul>
            </results-table>
        </div>
    </div>
</template>

<script>
import ResultsTable from './../components/pagecomponents/ResultsTable.vue';
export default {
    components: {
        ResultsTable,
    },
    data() {
        return {
            exams: [
                {
                    Maths: 90,
                    English: 67,
                    Kiswahili: 75,
                    Science: 86,
                    RE: 24,
                    SST: 52,
                },
            ],
            exam: ['Maths', 'English', 'Kiswahili', 'Science', 'RE', 'SST'],
        };
    },
};
</script>

<style>
.table-box {
    margin: 5rem auto;
}

.table-row {
    display: table;
    width: 60%;
    margin: 1rem auto;
    background-color: transparent;
    padding: 1.2rem auto;
    font-size: 1.3rem;
    box-shadow: 1px 4px 0 rgba(0, 0, 50, 0.3);
}

.table-cell {
    display: table-cell;
    width: 50%;
    text-align: center;
    padding: 4px 0;
    border-right: 1px solid black;
    vertical-align: middle;
}

.exam-title {
    font-size: 1.7rem;
    display: table-cell;
    width: 100%;
    text-align: center;
    padding: 4px 0;
    border-right: 1px solid black;
    vertical-align: middle;
}

.table-head {
    background-color: #1572a1;
}
</style>
