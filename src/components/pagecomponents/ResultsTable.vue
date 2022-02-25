<template>
    <div>
        <base-card>
            <h2>Mid-term Exam</h2>
            <div class="table-header">
                <div>Subject</div>
                <div>Marks</div>
            </div>
            <ul class="table-body">
                <slot></slot>
            </ul>

            <div class="table-footer">
                <div>Total</div>
                <div>400 <span>marks</span></div>
            </div>
        </base-card>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style>
.table-header,
.table-footer {
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
}

.table-body {
    padding-bottom: 2rem;
}
/* .table-box {
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
} */
</style>
