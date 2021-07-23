<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header">ユーザ情報</div>

                    <div class="card-body">
                        <form v-on:submit.prevent="logout">

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">名前：</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control-plaintext" name="name" v-model="user.name" readonly>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">メールアドレス：</label>

                                <div class="col-md-6">
                                    <input id="email" type="text" class="form-control-plaintext" name="email" v-model="user.email" readonly>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-2">
                                    <button type="submit" class="btn btn-dark btn-block">
                                        ログアウト
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: ""
        };
    },
    methods: {
        logout() {
            axios.post("/api/logout")
                .then(res => {
                    localStorage.removeItem("auth");
                    this.$router.push("/login");
                })
        }
    },
    mounted() {
        if (! localStorage.getItem("auth")) {
            return this.$router.push("/login");
        }
        
        axios.get("/api/user")
            .then(res => {
                this.user = res.data;
            });
    }
}
</script>