<template>
    <div class="movie-list">
        <v-container>
            <div style="height: 100px;"></div>
            <MovieCardRow
                v-for="movies in movies3"
                :key="movies.id"
                :movies="movies.movie"
                @selected="appendSelected"
            />
            <v-btn @click="selectedAll">취향 분석 시작</v-btn>
        </v-container>
    </div>
</template>

<script>
import axios from "axios";
import MovieCardRow from "@/components/MovieCardRow";

export default {
    name: "MovieList",
    components: {
        MovieCardRow
    },
    data() {
        return {
            movies3: [],
            selectedMovies: []
        };
    },
    methods: {
        getMovies() {
            const token = this.$session.get("jwt");
            const options = {
                headers: { Authorization: `JWT ${token}` }
            };
            axios
                .get("http://localhost:8000/api/v1/movies/research/", options)
                .then(res => {
                    const movies3 = [];
                    const movies = res.data;
                    for (let i = 0; i < 15; i += 3) {
                        const movie = {};
                        movie.id = i;
                        movie.movie = movies.slice(i, i + 3);
                        movies3.push(movie);
                    }
                    this.movies3 = movies3;
                });
        },
        appendSelected(movie) {
            console.log(movie);
            this.selectedMovies.push(movie);
            console.log(this.selectedMovies);
        },
        selectedAll() {
            this.$session.set("selected", this.selectedMovies);
            // this.$emit('selected', this.selectedMovies)
        }
    },
    mounted() {
        this.$emit("loggedIn");
        this.getMovies();
    }
};
</script>
