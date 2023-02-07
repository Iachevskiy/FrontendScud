<template>
  <div>child page</div>
  <button @click="load">
    load
  </button>
  <p>There are {{ data?.ships?.length || 0 }} ships.</p>
</template>

<script lang="ts" setup>
import { useLazyAsyncQuery, gql } from '#imports';

const query = gql`
  query getShips($limit: Int!) {
    ships(limit: $limit) {
      id
      name
    }
  }
`;

const variables = { limit: 5 };

const load = async () => {
  const { data } = await useLazyAsyncQuery(query, variables);
  console.log('click load', data);
};
</script>
