<template>
    <div v-if="!badge" class="profile">
        <img
            class="profile-photo"
            src="./../../Assets/avatar2.png"
            alt="default-avatar"
        />
        <span> {{ text }}</span>
    </div>
    <span v-else class="badge">
        {{ text }}
    </span>
</template>
<script>
export default {
    props: ['type', 'title'],
    computed: {
        text() {
            return this.title;
        },
    },
};
</script>

<style scoped>
.profile {
    background-color: #ccc;
    color: #252525;
    border-radius: 30px;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.profile-photo {
    height: 3.75rem;
    border-radius: 50%;
}

.badge {
    background-color: #ccc;
    color: #252525;
    border-radius: 30px;
    padding: 0.5rem 2.5rem;
    display: inline-block;
    margin-right: 0.5rem;
}

.frontend {
    background-color: #3d008d;
    color: white;
}

.backend {
    background-color: #71008d;
    color: white;
}

.career {
    background-color: #8d006e;
    color: white;
}
</style>
