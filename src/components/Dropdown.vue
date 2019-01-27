<template>
  <div
    v-click-outside="closeDropdown"
    :class="{'dropdown--expanded': isExpaned}"
    :aria-expanded="isExpaned"
    class="dropdown"
    aria-haspopup="true">

    <div :class="dropdownSelectorClass" @click="toggleDropdown">
      <slot name="selector"/>
    </div>

    <div v-on="menuClickDismiss ? { click: toggleDropdown } : {}">
      <slot :dropdownMenuClass="dropdownMenuClass" name="menu">
        <ul v-if="items" :class="dropdownMenuClass">
          <li
            v-for="(item, index) in items"
            :key="index"
            :class="{ 'dropdown__menu__item--selected': selectedValue && selectedValue === item }"
            class="dropdown__menu__item">
            <slot :item="item" :index="index" name="item">
              <div class="dropdown__link">{{ item.display }} </div>
            </slot>
          </li>
        </ul>
      </slot>
    </div>

  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  name: 'Dropdown',
  directives: {
    ClickOutside
  },
  props: {
    caretSelector: {
      type: Boolean,
      required: false,
      default: true
    },
    arrowSelector: {
      type: Boolean,
      required: false,
      default: false
    },
    menuCaret: {
      type: Boolean,
      required: false,
      default: true
    },
    menuRight: {
      type: Boolean,
      required: false,
      default: true
    },
    menuDark: {
      type: Boolean,
      required: false,
      default: false
    },
    menuClass: {
      type: String,
      required: false,
      default: ''
    },
    selectorClass: {
      type: String,
      required: false,
      default: ''
    },
    items: {
      type: Array,
      required: false
    },
    selectedValue: {
      required: false,
      default: null
    },
    menuClickDismiss: {
      required: false,
      default: true
    },
    expandedOverideState: {
      required: false,
      default: false
    },
    preventClick: {
      required: false,
      default: false
    },
    disabled: {
      required: false,
      deault: false
    }
  },
  data () {
    return {
      isExpaned: this.expandedOverideState || false
    };
  },
  computed: {
    dropdownSelectorClass () {
      return [
        'dropdown__selector',
        {
          'dropdown__selector--caret': this.caretSelector && !this.arrowSelector,
          'dropdown__selector--arrow': this.arrowSelector,
          'dropdown__selector--disabled': this.disabled
        },
        this.selectorClass
      ];
    },
    dropdownMenuClass () {
      return [
        'dropdown__menu',
        {
          'dropdown__menu--right': this.menuRight,
          'dropdown__menu--dark': this.menuDark,
          'dropdown__menu--caret': this.menuCaret
        },
        this.menuClass
      ];
    }
  },
  methods: {
    toggleDropdown () {
      if (!this.preventClick && !this.disabled) {
        this.isExpaned = !this.isExpaned;
        this.$emit(this.isExpaned ? 'dropdownExpanded' : 'dropdownCollapsed');
      }
    },
    closeDropdown () {
      if (this.isExpaned) {
        this.isExpaned = false;
        this.$emit('dropdownCollapsed');
      }
    }
  },
  watch: {
    expandedOverideState(isExpaned) {
      // Note: in order to support click outside funtionality, the internal state of expanded may deviate from the override,
      // so you will have to have to keep this value in sync with the parents value
      this.isExpaned = isExpaned;
    }
  }
};
</script>
