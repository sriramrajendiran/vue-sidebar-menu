<template>
  <ol :class="listClass" v-if="listType === 'ordered'">
    <li v-if="header">
      <h4>{{ $t(`${header}`) }}</h4>
    </li>
    <slot/>
    <li v-for="(item,index) in list.list" :key="index" :class="getOptionalAttribute(item,'class')" @mouseover="mouseOver(item)" >
      <h4 v-if="item.header">{{ $t(`${item.header}`) }}</h4>
      <div v-else-if="item.type === 'text'" class="dropdown__link">
        <strong v-if="item.title">{{ item.title }}</strong>
        {{ getDisplayValue(item) }}
      </div>
      <a v-else :class="getOptionalAttribute(item,'link_class')" @click="click(item, $event)" :href="getHref(item)" :data-et-name="getOptionalAttribute(item,'name')" :data-et-prop-location="getOptionalAttribute(item,'location')" :target="getOptionalAttribute(item,'target')" v-et-click>{{ getDisplayValue(item) }}</a>
    </li>
  </ol>
  <ul :class="listClass" v-else>
    <li v-if="header">
      <h4>{{ $t(`${header}`) }}</h4>
    </li>
    <slot/>
    <li v-for="(item,index) in list.list" :key="index" :class="getOptionalAttribute(item,'class')" @mouseover="mouseOver(item)" data-test="list-item">
      <h4 v-if="item.header">{{ $t(`${item.header}`) }}</h4>
      <div v-else-if="item.type === 'text'" class="dropdown__link">
        <strong v-if="item.title">{{ item.title }}</strong>
        {{ getDisplayValue(item) }}
        <a :href="item.link" v-if="item.linkText">
          {{ item.linkText }}
        </a>
      </div>
      <router-link v-else-if="item.routeOptions" :to="item.routeOptions" :class="getOptionalAttribute(item,'link_class')" @click="click(item, $event)" :data-et-name="getOptionalAttribute(item,'name')" :data-et-prop-location="getOptionalAttribute(item,'location')" :target="getOptionalAttribute(item,'target')" v-et-click>{{ getDisplayValue(item) }}</router-link>
      <a v-else :class="getOptionalAttribute(item,'link_class')" @click="click(item, $event)" :href="getHref(item)" :data-et-name="getOptionalAttribute(item,'name')" :data-et-prop-location="getOptionalAttribute(item,'location')" :target="getOptionalAttribute(item,'target')" data-test="list-item-link" v-et-click>{{ getDisplayValue(item) }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['header', 'list', 'listType', 'listClass', 'currentView'],
  methods: {
    getHref(item) {
      return (item['href'] ? item['href'] : (item.prefix ? `/${item.prefix}/${item.key}` : `/${this.list.prefix}/${item.key}`));
    },
    getDisplayValue(item) {
      return item.display;
    },
    getOptionalAttribute(item, attribute) {
      return (item[attribute] ? item[attribute] : this.list[attribute]);
    },
    /* istanbul ignore next */
    mouseOver(item) {
      this.$emit('mouseOver', item);
    },
    click(item, $event) {
      this.$emit('click', item, $event);
    }
  }
};
</script>
