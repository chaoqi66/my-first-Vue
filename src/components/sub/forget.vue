<template>
    <div>
		<div class="mui-content">
			<form class="mui-input-group">
				<!--
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>             	
                -->
				<div class="mui-input-row">
					<label>旧密码</label>
					<input id='old' type="email" class="mui-input-clear mui-input" placeholder="请输入旧密码">
				</div>
                <div class="mui-input-row">
                    <label>新密码</label>
					<input id='new' type="email" class="mui-input-clear mui-input" placeholder="请输入新密码">
                </div>
                <div class="mui-input-row">
                    <label></label>
					<input id='newsure' type="email" class="mui-input-clear mui-input" placeholder="请确认密码">
                </div>
			</form>
			<div class="mui-content-padded">
				<button id='sendMail' class="mui-btn mui-btn-block mui-btn-primary">提交</button>
			</div>
		</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.area {
	margin: 20px auto 0px auto;
}
.mui-input-group:first-child {
	margin-top: 20px;
}
.mui-input-group label {
	width: 30%;
}
.mui-input-row label~input,
.mui-input-row label~select,
.mui-input-row label~textarea {
	width: 70%;
}
.mui-checkbox input[type=checkbox],
.mui-radio input[type=radio] {
	top: 6px;
}
.mui-content-padded {
	margin-top: 25px;
}
.mui-btn {
	padding: 10px;
}
.mui-input-row label~input, .mui-input-row label~select, .mui-input-row label~textarea{
	margin-top: 1px;
}
</style>
