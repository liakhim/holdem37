<template>
    <div class="flipped-card">
        <div class="flipped-card-border">
            <img src="../assets/shirt.png" alt="">
        </div>
    </div>
</template>
<style lang="scss">
    .flipped-card {
        width: 80px;
        height: 120px;
        box-shadow: 0 0 10px #00000030;
        &-border {
            height: 100%;
            border: 5px solid #fff;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
                height: 100%;
            }
        }
    }
</style>