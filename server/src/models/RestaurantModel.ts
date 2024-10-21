import { Schema, ObjectId, model } from "mongoose";

export interface Restaurant {
  _id?: ObjectId;
  id: string;
  name: string;
  address: string;
  manager: Manager;
  items: Item[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Manager {
  name: string;
  mobile: number;
}

export interface Item {
  name: string;
  description: string;
  quantity: number;
  timing: Date;
}

const managerSchema = new Schema<Manager>({
  name: {
    type: Schema.Types.String,
    required: true,
    minlength: [4, "Item's Name Must Be A Minimum of 4 Characters"],
    maxlength: [50, "Item's Name Must Be A Maximum of 50 Characters"],
  },
  mobile: {
    type: Schema.Types.Number,
    required: false,
    default: null,
  },
});

const itemSchema = new Schema<Item>({
  name: {
    type: Schema.Types.String,
    required: true,
    minlength: [4, "Item's Name Must Be A Minimum of 4 Characters"],
    maxlength: [50, "Item's Name Must Be A Maximum of 50 Characters"],
  },
  description: {
    type: Schema.Types.String,
    required: true,
    minlength: [4, "Item's Name Must Be A Minimum of 4 Characters"],
    maxlength: [250, "Item's Name Must Be A Maximum of 250 Characters"],
  },
  quantity: {
    type: Schema.Types.Number,
    required: true,
    min: [0.5, "Item's Quantity Must Be A Minimum Of 0.5Kg"],
  },
  timing: {
    type: Schema.Types.Date,
    required: true,
  },
});

const restaurantSchema = new Schema<Restaurant>(
  {
    id: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    name: {
      type: Schema.Types.String,
      required: true,
      minlength: [4, "User's Name Must Be A Minimum of 4 Characters"],
      maxlength: [50, "User's Name Must Be A Maximum of 50 Characters"],
    },
    address: {
      type: Schema.Types.String,
      required: false,
      default: "",
    },
    manager: {
      _id: false,
      type: managerSchema,
      required: false,
      default: {},
    },
    items: {
      _id: false,
      type: [itemSchema],
      required: false,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const RestaurantModel = model("restaurant", restaurantSchema);

export default RestaurantModel;
