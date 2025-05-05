import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons'; // Expo icons
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'; // Import relativeTime plugin
import { Post } from '@/types';

// Extend dayjs with the relativeTime plugin
dayjs.extend(relativeTime);

interface PostListItemProps {
  post: Post;
}

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <View className="bg-gray-900/70 p-4 rounded-lg mb-4">
      {/* User Info */}
      <View className="flex-row items-center mb-2">
        <Image
          source={{ uri: post.user.image }}
          className="w-10 h-10 rounded-full mr-3"
        />
        <View>
          <Text className="text-white font-bold">{post.user.name}</Text>
          <Text className="text-gray-400 text-sm">@{post.user.username}</Text>
        </View>
      </View>

      {/* Post Content */}
      <Text className="text-white mb-2">{post.content}</Text>

      {/* Post Metadata */}
      <Text className="text-gray-500 text-xs mb-2">
        {dayjs(post.createdAt).fromNow()} {/* Display relative time */}
      </Text>

      {/* Action Buttons */}
      <View className="flex-row justify-start gap-5 items-center mt-2">
        {/* Like Button */}
        <TouchableOpacity className="flex-row items-center">
          <FontAwesome name="heart-o" size={20} color="white" />
          <Text className="text-gray-400 text-sm ml-1">{post.likes || 0}</Text>
        </TouchableOpacity>

        {/* Comment Button */}
        <TouchableOpacity className="flex-row items-center">
          <Feather name="message-circle" size={20} color="white" />
          <Text className="text-gray-400 text-sm ml-1">{post.comments || 0}</Text>
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity className="flex-row items-center">
          <Feather name="share" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}