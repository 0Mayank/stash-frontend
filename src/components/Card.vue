<template>
    <v-hover v-slot="{ isHovering, props }">    
        
        <v-card width="310" class="rounded-card pa-1 ma-3" color="primary" v-bind="props">
            <v-img class="rounded-card" cover aspect-ratio="0.6666667" :src="bg"></v-img>
            
            <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @leave="leave"
                :css="false"
            >
                <div v-if="isHovering" class="rounded-card overlay">   
                    
                    

                    <div class="content">
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
                </div>
            </transition>
            
        </v-card>

    </v-hover>
</template>

<script lang="ts">
import gsap from 'gsap'

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
    },
    methods: {
        beforeEnter(el: { style: any }) {
            el.style.opacity = 0
            el.style.height = '0em'
        },
        enter(el: any, done: any) {
            gsap.to(
                el, {
                duration: 0.45,
                opacity: 1, 
                height: '100%',
                ease: 'power1', 
                onComplete: done
            })
        },
        leave(el: any, done: any) {
            gsap.to(
                el, {
                duration: 0.19,
                opacity: 0, 
                height: '0em',
                ease: 'power1', 
                onComplete: done
            })
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
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
}
.content {
    position: absolute;
    bottom: 0px;
}
</style>