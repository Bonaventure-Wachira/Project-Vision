<template>
    <div>
        <exam-card>
            <h2>Mid-term Exam</h2>
            <div class="table-header">
                <div>Subject</div>
                <div>Marks</div>
            </div>
            <ul class="table-body">
                <slot></slot>
            </ul>
        </exam-card>
    </div>
</template>

<script>
import ExamCard from '../ui/ExamCard.vue';
export default {
    components: { ExamCard },
};
</script>

<style>
.table-header,
.table-footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
}

.table-body {
    padding-bottom: 2rem;
}
</style>
