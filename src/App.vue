<template>
    <div>
        <router-view></router-view>
        <div>
            <div>
                <Header></Header>
                <div id="app"></div>
                <Customer></Customer>
                
            </div>
        </div>
    </div>
</template>

<script>
    import Customer from './components/Customer';
    import Header from './components/Header';

export default {
  name: 'App',
        components: {
            Customer,
            Header
  }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    #app {
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
   
</style>
