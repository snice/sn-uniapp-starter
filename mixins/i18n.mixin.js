export default {
	mounted() {
		const self = this
		this.$i18n = {
			set locale(value) {
				self.$store.dispatch('setLocale', value)
			},
			get locale() {
				return self.$store.getters.locale
			},
			set messages(value) {
				self.$store.dispatch('lang/setMessages', value)
			}
		}
	},
	methods: {
		$t(s) {
			return this.$store.getters.$t(s)
		}
	}
}
