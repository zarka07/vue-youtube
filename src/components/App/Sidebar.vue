<template>
    <ul class="sidenav app-sidenav" :class="{open:value}">
        <router-link
        v-for="link in links"
        :key="link.url"
        tag="li"
        active-class="active"
        :to="link.url"
        :exact="link.exact"
        ><a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
        </router-link>
      <!--<li>
        <a href="#" class="waves-effect waves-orange pointer">Счет</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-orange pointer">История</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-orange pointer">Планирование</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-orange pointer">Новая запись</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-orange pointer">Категории</a>
      </li>-->
    </ul>
</template>

<script>
export default {
    props: ['value'],
    data: ()=>({
        links:[
            {title:'Счет',url:'/',exact:true},
            {title:'История',url:'/history'},
            {title:'Планирование',url:'/planning'},
            {title:'Новая запись',url:'/record'},
            {title:'Категория',url:'Categories'},
        ]
    })
}
</script>
