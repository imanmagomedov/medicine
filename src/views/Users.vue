<template>
  <div class="mb-users">
    <v-toolbar flat color="white">
      <v-toolbar-title>Пользователи</v-toolbar-title>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="users"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.email }}</td>
        <td>{{ props.item.role ? props.item.role.name : '-' }}</td>
        <td>{{ props.item.createdDate }}</td>
        <td>{{ props.item.updatedDate }}</td>
        <td>
          <v-icon
            small
            @click="deleteUser(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'users',

  data() {
    return {
      headers: [
        { text: 'ID', value: 'id'},
        { text: 'Имя', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Роль', value: 'role' },
        { text: 'Дата создания', value: 'createdDate' },
        { text: 'Дата обновления', value: 'updatedDate' },
        { text: 'Действия', value: 'actions' }
      ],

      // rules: {
      //   required: value => !!value || 'Required.',
      //   passwordMin: value => value.length >= 8 || 'Минимальное количество 8 символов',
      //   emailMatch: () => ('Поле обязательное к заполнению'),
      //   email: value => {
      //     const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      //     return pattern.test(value) || 'Invalid e-mail.'
      //   }
      // },
    }
  },

  computed: {
    users () {
      return this.$store.getters['users/data']
    }
  },

  methods: {
    deleteUser (item) {
      confirm('Вы точно хотите удалить пользователя под №' + item.id + ' ?') && this.$store.dispatch('users/delete', item.id)
    }
  },

  mounted () {
    this.$store.dispatch('users/getUsers')
  }
}
</script>
