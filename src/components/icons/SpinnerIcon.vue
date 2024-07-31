<script>
export default {
  name: "SpinnerIcon",
  data: () => {
    return {};
  },
}
</script>

<template>
    <div class="spinner">
        <div class="spinner-icon"></div>
    </div>
</template>

<style scoped lang="scss">
    .spinner {
        width: 100%;
        height: 100%;
        margin-top: 25%;
        margin-left: 50%;

        @media screen and (max-width: 900px) {
            margin-top: 40%;
        }

        @media screen and (max-width: 500px) {
            margin-top: 50%;
            margin-left: 45%;
        }

        .spinner-icon {
            width: 50px;
            aspect-ratio: 1;
            display:grid;
            -webkit-mask: conic-gradient(from 15deg,#0000,#000);
            animation: s6 1s infinite steps(12);
        }
        .spinner-icon,
        .spinner-icon:before,
        .spinner-icon:after{
            background:
                radial-gradient(closest-side at 50% 12.5%,
                #5f94d6 96%,#0000) 50% 0/20% 80% repeat-y,
                radial-gradient(closest-side at 12.5% 50%,
                #5f94d6 96%,#0000) 0 50%/80% 20% repeat-x;
        }
        .spinner-icon:before,
        .spinner-icon:after {
            content: "";
            grid-area: 1/1;
            transform: rotate(30deg);
        }
        .spinner-icon:after {
            transform: rotate(60deg);
        }

        @keyframes s6 {
            100% { transform:rotate(1turn) }
        }
    }
</style>
