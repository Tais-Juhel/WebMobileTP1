<template>
    <div class="movie-card">
        <h5>{{ movie.title }}</h5>
        <div class="content">
            <img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" alt="">
            <div class="infos">
                <p class="overview">{{ movie.overview }}</p>
                <div class="vote">
                    <p class="popularity">
                        <strong>Vote: </strong>{{ movie.vote_average }}
                    </p>
                    <img src="../assets/icon/star.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "movie-card",
    props: {
        movie: Object,
    }
}
</script>

<style lang="scss">
.movie-card {
    width: 400px;
    color: lightgrey;
    margin-bottom: 50px;
    padding: 10px;
    border-radius: 10px;
    transition: all ease 200ms;

    &:hover {
        background: #26303E;
    }

    h5 {
        font-size: 24px;
    }

    .content {
        display: flex;
        margin-top: 20px;
        
        img {
            width: 150px;
        }

        .infos {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-left: 20px;
            text-align: justify;

            .overview {
                font-size: 12px;
            }

            .vote {
                display: flex;
                align-items: center;

                .popularity {
                    font-size: 11px;
                }

                img {
                    width: 14px;
                }
            }
        }
    }
}
</style>