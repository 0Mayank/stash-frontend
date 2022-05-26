<template>
    <v-hover v-slot="{ isHovering, props }">    
        <v-card width="310" class="rounded-card pa-1 ma-3" color="primary" v-bind="props">
            
            <v-img class="rounded-card" cover aspect-ratio="0.6666667" :src="bg"></v-img>
            
            <div v-if="isHovering" class="overlay rounded-card"></div>

            <transition name="slide-fade">
                <div v-if="isHovering" class="hover-div rounded-card">   
                    <!-- <v-sheet class="game-icon rounded-card" width="60" color="primary" elevation="7">
                        <v-img class="rounded-card" width="60" :src="icon"></v-img>
                    </v-sheet> -->

                    <v-card-title class="text-h5 font-weight-bold">{{ title }}</v-card-title>
                    
                    <v-card-actions v-if="last_played">
                        <v-btn class="act-btn" rounded>
                            <v-icon>mdi-circle-medium</v-icon>
                            Last Played: {{ last_played }}
                        </v-btn>
                        <v-spacer/>
                        <v-btn class="act-btn" rounded>
                            <v-icon>mdi-circle-medium</v-icon>
                            Last Saved: {{ last_saved }}
                        </v-btn>
                    </v-card-actions>
                </div>
            </transition>
        </v-card>
    </v-hover>
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
.rounded-card {
    border-radius: 20px;
}

.game-icon {
    margin-left: 20px;
}

.act-btn {
    font-size: 10px;
}

.overlay{
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
    width: 100%;
    height: 50%;
    margin-top: -226.5px;
    transform: translate(0, 0);
}

.hover-div {
    margin-top: -100px;
    transform: translate(0, 0);
}
</style>