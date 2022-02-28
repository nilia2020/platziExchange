<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <px-icon class="mr-2" />
          <router-link
            :to="{ name: 'home' }"
            class="font-semibold text-xl tracking-tight"
            >PlatziExchange
          </router-link>
        </div>
        <div
          class="block sm:block w-full flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow">
            <router-link
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >{{ l.title }}</router-link
            >
          </div>
        </div>
        <div>
          <div class="text-md lg:flex-grow text-yellow-100 font-semibold mr-8">
            <router-link to="/about">About</router-link>
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from '@/components/PxIcon'
export default {
  name: 'PxHeader',
  components: { PxIcon },
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>
