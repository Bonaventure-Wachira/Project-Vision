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
            <h2>Here are your records</h2>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            exams: [],
        };
    },
};
</script>
