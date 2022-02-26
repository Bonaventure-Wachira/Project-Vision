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
</style>
