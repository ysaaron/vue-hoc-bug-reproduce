<template>
  <div>
    <styled-button>
      123
      <div>
        456
      </div>
      <another-test>
      </another-test>

      <normal-component>
      </normal-component>
    </styled-button>
  </div>
</template>

<script>
import { withStyle } from '../lib/withStyle'
import StyledButton from '../components/StyledButton'
import AnotherTest from '../components/AnotherTest.vue'

const NormalComponent  = withStyle({
  background: 'green'
})(AnotherTest)

export default {
  name: 'exmaple',
  components: {
    'styled-button': StyledButton,
    'another-test': AnotherTest,
    'normal-component': NormalComponent
  }
}
</script>
