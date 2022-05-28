<template>
  <general-header-component></general-header-component>
  <pv-dropdown
    v-model="selectedMechanic"
    :options="mechanics"
    optionLabel="name"
    v-on:change="updateSelectedMechanic"
  ></pv-dropdown>
  <div class="m-6">
    <div class="grid">
      <div class="col text-center">
        <img
          class="text-center"
          src="https://images.unsplash.com/photo-1588993986550-6ae221c7146e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=460"
          alt="car repair shop image"
        />
      </div>
      <div
        class="
          col
          text-center
          align-items-center
          flex flex-column
          main-description
        "
      >
        <h2 class="font-bold text-4xl">{{ selectedMechanic.name }}</h2>
        <span>
          <span class=""> <i class="pi pi-star-fill"></i></span>
          47 reviews
        </span>
        <p>{{ selectedMechanic.location }}</p>
        <p class="font-semibold">{{ selectedMechanic.phone }}</p>
        <pv-button>Make an appointment</pv-button>
      </div>
    </div>
    <div
      class="
        text-left
        bg-white
        flex flex-column
        about-section
        p-6
        m-3
        border-round
      "
    >
      <h2 class="font-semibold text-2xl">About</h2>
      <div>
        <p>
          {{ selectedMechanic.description }}
        </p>
      </div>
    </div>
    <div
      class="
        reviews-section
        text-left
        bg-white
        flex flex-column
        p-6
        m-3
        border-round
      "
    >
      <h2 class="font-semibold text-2xl">Reviews</h2>
      <div>
        <span class="font-semibold text-2xl p-3"> 4.5 </span>
        <span class="">
          <i class="pi pi-star-fill" style="font-size: 2rem"></i>
          <i class="pi pi-star-fill" style="font-size: 2rem"></i>
          <i class="pi pi-star-fill" style="font-size: 2rem"></i>
          <i class="pi pi-star-fill" style="font-size: 2rem"></i>
          <i class="pi pi-star-fill" style="font-size: 2rem"></i>
        </span>
      </div>
      <div class="flex flex-column">
        <ul style="list-style: none">
          <li v-for="review in reviews" :key="review.id">
            <div class="grid box-review p-5">
              <div class="col flex flex-column justify-content-center m-2">
                <p class="font-semibold p-2">{{ review.publisher }}</p>
                <span clas="p-2"
                  ><i class="pi pi-car p-2"></i>{{ review.car }}</span
                >
              </div>
              <div class="col">
                <div class="grid align-items-center p-2">
                  <!--
                  <span class="">
                    <i class="pi pi-star-fill"></i>
                    <i class="pi pi-star-fill"></i>
                    <i class="pi pi-star-fill"></i>
                    <i class="pi pi-star-fill"></i>
                    <i class="pi pi-star-fill"></i>
                  </span>
                  -->

                  <pv-rating
                    :modelValue="review.rating"
                    :readonly="true"
                    :cancel="false"
                  />

                  <span class="font-semibold pl-6" style="font-size: 1.1rem">
                    {{ review.date }}
                  </span>
                </div>
                <p>
                  {{ review.body }}
                </p>
              </div>
            </div>
          </li>
        </ul>

        <!--
        <div class="grid box-review p-5">
          <div class="col flex flex-column justify-content-center m-2">
            <p class="font-semibold p-2">Ludo Bagman</p>
            <span clas="p-2"
              ><i class="pi pi-car p-2"></i>2022 Mercedes-Benz C-Class</span
            >
          </div>
          <div class="col">
            <div class="grid align-items-center p-2">
              <span class="">
                <i class="pi pi-star-fill"></i>
                <i class="pi pi-star-fill"></i>
                <i class="pi pi-star-fill"></i>
                <i class="pi pi-star-fill"></i>
                <i class="pi pi-star-fill"></i>
              </span>
              <span class="font-semibold pl-6" style="font-size: 1.1rem">
                05/20/2022
              </span>
            </div>
            <p>
              A thorough and honest business! I know the job will always be done
              correctly and I don't have to return multiple times. They are also
              always on time and the wait is never too much.
            </p>
          </div>
        </div>
        -->
      </div>
      
      <div class="flex flex-column" style="max-width: 500px">
        <pv-rating
          v-model="rating"
          :modelValue="5"
          @click="newMethod"
          :cancel="false"
        />
        <pv-textarea
          v-model="body"
          :autoResize="true"
          rows="5"
          cols="50"
          maxlength="500"
          :placeholder="'Enter your review here'"
          required="true"
        />
        <div
          :class="{
            'review-alert': field == true,
            'review-alert-disabled': field == false,
          }"
        >
          <h3>Please fill out all fields</h3>
        </div>
        <pv-button
          class="mt-2"
          label="Submit"
          icon="pi pi-check"
          iconPos="right"
          @click="addComment"
        />
      </div>

      <!--<review-component></review-component>-->

    </div>
  </div>
</template>

<script>
import generalHeaderComponent from "../../components/general-header.component.vue";
import { ReviewsApiService } from "../../reviews/services/reviews-api.service";
import { MechanicsProfileApiService } from "../services/mechanics-api.service";
import reviewComponent from "../../reviews/pages/review.component.vue";

export default {
  components: { reviewComponent },
  name: "mechanic-profile",
  component: {
    generalHeaderComponent,
    reviewComponent,
  },
  data() {
    return {
      rating: null,
      body: null,
      field: false,
      newReview: {
        rating: null,
        body: null,
        car: "car test",
        publisher: "name test",
        date: "date test",
        workshopId: null,
      },

      mechanics: [],
      selectedMechanic: {},
      reviews: [],
      reviewsService: null,
      mechanicsService: null,
    };
  },
  created() {
    this.reviewsService = new ReviewsApiService();
    this.mechanicsService = new MechanicsProfileApiService();
    this.mechanicsService.getAll().then((response) => {
      this.mechanics = response.data;
      this.selectedMechanic = this.mechanics[0];
      this.reviewsService
        .findByMechanicId(this.selectedMechanic.id)
        .then((response) => {
          this.reviews = response.data;
        });
    });
  },
  methods: {
    updateSelectedMechanic() {
      this.reviewsService
        .findByMechanicId(this.selectedMechanic.id)
        .then((response) => {
          this.reviews = response.data;
        });
    },
    addComment() {
      if (this.rating == null || this.body == null) this.field = true;
      else {
        console.log(this.rating, this.body);
        this.field = false;
        this.newReview.rating = this.rating;
        this.newReview.body = this.body;
        this.newReview.workshopId = this.selectedMechanic.id;
        this.reviewsService.create(this.newReview).then((response) => {
          this.reviews.push(response.data);
        });
        this.rating = null;
        this.body = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pi-star-fill {
  color: #e98b2f;
  padding: 10px;
  font-size: 1.5rem;
}

.main-description,
.about-section,
.reviews-section {
  gap: 1em;
}

.box-review {
  border-bottom: 1px solid #dae1e7;
}

::v-deep() {
  .p-rating .p-rating-star {
    height: 500px;
  }
}

.review-alert {
  color: red;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
}
.review-alert-disabled {
  display: none;
}
</style>
