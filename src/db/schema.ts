import {
	pgTable,
	text,
	timestamp,
	boolean,
	decimal,
	pgEnum,
} from "drizzle-orm/pg-core";

export const typeEnum = pgEnum("type", ["EXPENSE", "INCOME"]);
export const statusEnum = pgEnum("status", ["PENDING", "PAID"]);
export const frequencyEnum = pgEnum("frequency", [
	"DAILY",
	"WEEKLY",
	"MONTHLY",
	"YEARLY",
]);

export const user = pgTable("user", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	emailVerified: boolean("email_verified")
		.$defaultFn(() => false)
		.notNull(),
	image: text("image"),
	createdAt: timestamp("created_at")
		.$defaultFn(() => /* @__PURE__ */ new Date())
		.notNull(),
	updatedAt: timestamp("updated_at")
		.$defaultFn(() => /* @__PURE__ */ new Date())
		.notNull(),
});

export const session = pgTable("session", {
	id: text("id").primaryKey(),
	expiresAt: timestamp("expires_at").notNull(),
	token: text("token").notNull().unique(),
	createdAt: timestamp("created_at").notNull(),
	updatedAt: timestamp("updated_at").notNull(),
	ipAddress: text("ip_address"),
	userAgent: text("user_agent"),
	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
	id: text("id").primaryKey(),
	accountId: text("account_id").notNull(),
	providerId: text("provider_id").notNull(),
	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	accessToken: text("access_token"),
	refreshToken: text("refresh_token"),
	idToken: text("id_token"),
	accessTokenExpiresAt: timestamp("access_token_expires_at"),
	refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
	scope: text("scope"),
	password: text("password"),
	createdAt: timestamp("created_at").notNull(),
	updatedAt: timestamp("updated_at").notNull(),
});

export const verification = pgTable("verification", {
	id: text("id").primaryKey(),
	identifier: text("identifier").notNull(),
	value: text("value").notNull(),
	expiresAt: timestamp("expires_at").notNull(),
	createdAt: timestamp("created_at").$defaultFn(
		() => /* @__PURE__ */ new Date()
	),
	updatedAt: timestamp("updated_at").$defaultFn(
		() => /* @__PURE__ */ new Date()
	),
});

export const budgets = pgTable("budgets", {
	id: text("id").primaryKey(),
	title: text("title").notNull(),
	amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
	periodStart: timestamp("period_start").notNull(),
	periodEnd: timestamp("period_end").notNull(),

	ownerId: text("owner_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	categoryId: text("category_id")
		.notNull()
		.references(() => categories.id, { onDelete: "cascade" }),

	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const categories = pgTable("expense_categories", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	icon: text("icon"), // optional
	color: text("color"), // optional
	createdByUserId: text("created_by_user_id"), // null = default system category
});

export const transactions = pgTable("transactions", {
	id: text("id").primaryKey(),
	title: text("title").notNull(),
	type: typeEnum("type").default("EXPENSE"),
	status: statusEnum("status").default("PAID"),
	amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
	transactionDate: timestamp("transaction_date").defaultNow().notNull(),
	description: text("description"),
	isRecurring: boolean("is_recurring").default(false),

	ownerId: text("owner_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	recurringTransactionId: text("recurring_transaction_id").references(
		() => recurringTransaction.id,
		{ onDelete: "set null" }
	),

	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const recurringTransaction = pgTable("recurring_transaction", {
	id: text("id").primaryKey(),
	amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
	frequency: frequencyEnum("frequency").notNull(),
	nextDueDate: timestamp("next_due_date").notNull(),
	description: text("description"),

	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	categoryId: text("category_id").references(() => categories.id),
	accountId: text("account_id").references(() => account.id),

	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const schema = {
	user,
	account,
	session,
	verification,
	budgets,
	categories,
	transactions,
	recurringTransaction,
};
