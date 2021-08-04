<template>
  <div id="app" class="md-layout">
    <div class="md-layout-item md-size-33" v-for="quadrinho in quadrinhos" :key="quadrinho.id">
      <quadrinho
        :titulo="quadrinho.title"
        :descricao="quadrinho.description"
        :imagem="getImagem(quadrinho)"
    ></quadrinho>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import MarvelApi from '@/services/MarvelAPI';
import Quadrinho from '@/components/Quadrinho';

export default {
  name: 'App',
  components: {
    Quadrinho
  },
  data() {
    return {
      quadrinhos: []
    }
  },
  created(){
    var self = this;
    MarvelApi.getAllComics(10, comics => {
      self.quadrinhos = comics.data.data.results;
    })
  },
  methods: {
    getImagem: function(quadrinho){
      if (quadrinho.images.length) {
        return quadrinho.images[0].path + '/portrait_medium.jpg';
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
