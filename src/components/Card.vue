<template>
    <v-card width="310" class="rounded-card pa-1" color="primary">
        <v-img class="rounded-card bg-image" :src="bg"></v-img>
        
        <v-sheet class="game-icon rounded-card" width="60" color="primary" elevation="7">
            <v-img class="rounded-card" width="60" :src="icon"></v-img>
        </v-sheet>

        <v-card-title>{{ title }}</v-card-title>
        
        <v-card-actions v-if="last_played">
            <v-btn class="act-btn" rounded>
                <!-- this icon? -->
                <v-icon>mdi-rhombus-medium</v-icon>
                Last Played: {{ last_played }}
            </v-btn>
            <v-spacer/>
            <v-btn class="act-btn" rounded>
                <!-- or this icon? -->
                <v-icon>mdi-circle-medium</v-icon>
                Last Saved: {{ last_saved }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
export default {
    props: {
        bg: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        last_played: {
            type: String,
            default: null
        },
        last_saved: {
            type: String,
            default: null
        }
    }
}
</script>

<style scoped>
.bg-image {
    filter: blur(1px);
}
.rounded-card {
    border-radius: 20px;
}

.game-icon {
    margin-left: 20px;
    margin-top: -30px;
}

.act-btn {
    font-size: 10px;
}
</style>