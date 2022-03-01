<template>
    <div>
        <h1>My scoresheet</h1>

        <div v-if="exams.length == 0">
            <base-card>
                <h2>You do not have any exam results here just yet.</h2>
                <h4>Would you like to get started?</h4>
            </base-card>
        </div>
        <div v-else class="scoresheet-container">
            <div v-for="(test, index) in exams" :key="index">
                <results-table>
                    <ul>
                        <li
                            v-for="(subject, index) in createArr(test)"
                            :key="index"
                        >
                            <div class="subject">
                                <div>{{ subject[0] }}</div>
                                <div>{{ subject[1] }}</div>
                            </div>
                        </li>
                    </ul>
                    <div class="table-footer">
                        <div>Total</div>
                        <div>
                            {{ totalMarks(createArr(test)) }} <span>marks</span>
                        </div>
                    </div>
                </results-table>
            </div>
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
                {
                    Maths: 88,
                    English: 80,
                    Kiswahili: 67,
                    Science: 60,
                    RE: 25,
                    SST: 47,
                },
            ],
        };
    },
    methods: {
        createArr(obj) {
            const exam = [];
            for (const [key, value] of Object.entries(obj)) {
                exam.push([key, value]);
            }
            return exam;
        },
        totalMarks(arr) {
            let total = 0;
            arr.forEach((el) => {
                total += el[1];
            });
            return total;
        },
    },
};
</script>

<style>
.table-box {
    margin: 5rem auto;
}

.scoresheet-container {
    display: grid;

    grid-template-columns: repeat(3, 1fr);
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

.table-footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
}

li {
    list-style: none;
    font-size: 1.4rem;
    padding: 0.3rem 0;
}

.subject {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
}
</style>
