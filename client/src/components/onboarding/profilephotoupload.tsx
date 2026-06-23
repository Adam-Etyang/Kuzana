"use client";

export default function ProfilePhotoUpload() {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        Profile Photo
      </label>

      <input
        type="file"
        accept="image/*"
        className="w-full border rounded-lg p-3"
      />
    </div>
  );
}